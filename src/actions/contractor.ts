"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getSession } from "@auth0/nextjs-auth0";
import { LegalEntity } from "@/types/types";
import convertToBoolean from "@/utils/convertToBoolean";

export async function createContractor(data: LegalEntity): Promise<void> {
  let isPrefixEntityType;

  if (
    data.isPrefixEntityType !== undefined &&
    data.isPrefixEntityType !== null
  ) {
    isPrefixEntityType = convertToBoolean(data.isPrefixEntityType);
  }

  let newContractorId: number | undefined;

  try {
    const session = await getSession();
    const userId = session?.user.sub;

    if (!userId) {
      throw new Error("ユーザーIDを確認してください.");
    }

    const newContractor = await prisma.contractor.create({
      data: {
        createdBy: userId,
        ...(data.entityType && { entityType: data.entityType }),
        ...(data.isPrefixEntityType && {
          isPrefixEntityType: isPrefixEntityType,
        }),
        name: data.name,
        ...(data.representativeTitle && { representativeTitle: data.representativeTitle }),
        ...(data.representativeName && { representativeName: data.representativeName }),
        ...(data.tradeName && { tradeName: data.tradeName }),
        postalCode: data.postalCode,
        prefecture: data.prefecture,
        city: data.city,
        town: data.town,
        address: data.address,
        ...(data.address2 && { address2: data.address2 }),
      },
    });

    newContractorId = newContractor.id;
    revalidatePath("/contractors");
  } catch (error) {
    console.error("データの登録に失敗しました.", error);
    throw new Error("データの登録に失敗しました.");
  } finally {
    if (newContractorId !== undefined) {
      redirect(`/contractors/${newContractorId}`);
    }
  }
}

export async function updateContractor(formData: Partial<LegalEntity>) {
  try {
    const id = formData.id;
    const session = await getSession();
    const userId = session?.user.sub;

    if (typeof formData.isPrefixEntityType === "string") {
      formData.isPrefixEntityType = formData.isPrefixEntityType === "true";
    }

    await prisma.contractor.update({
      where: { id: id },
      data: {
        ...formData,
        updatedBy: userId,
      },
    });

    return { success: true, message: "業者情報を更新しました！" };
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.");
  }
}
