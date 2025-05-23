"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
// import { getSession } from "@auth0/nextjs-auth0";
// import { LegalEntityFormData } from "@/types/types";
import convertToBoolean from "@/utils/convertToBoolean";
import { Contractor } from "@prisma/client";

export async function createContractor(formData: Contractor): Promise<void> {
  let isPrefixEntityType;

  if (
    formData.isPrefixEntityType !== undefined &&
    formData.isPrefixEntityType !== null
  ) {
    isPrefixEntityType = convertToBoolean(formData.isPrefixEntityType);
  }

  const normalisedRepresentativename = formData.representativeName
    ? formData.representativeName.replace(/　/g, " ")
    : formData.representativeName;

  let newContractorId: number | undefined;

  try {
    // const session = await getSession();
    // const userId = session?.user.sub;

    // if (!userId) {
    //   throw new Error("ユーザーIDを確認してください.");
    // }

    const newContractor = await prisma.contractor.create({
      data: {
        createdBy: "",
        ...(formData.entityType && { entityType: formData.entityType }),
        ...(formData.isPrefixEntityType && {
          isPrefixEntityType: isPrefixEntityType,
        }),
        name: formData.name,
        ...(formData.representativeTitle && {
          representativeTitle: formData.representativeTitle,
        }),
        ...(normalisedRepresentativename && {
          representativeName: normalisedRepresentativename,
        }),
        ...(formData.tradeName && { tradeName: formData.tradeName }),
        postalCode: formData.postalCode,
        prefecture: formData.prefecture,
        city: formData.city,
        town: formData.town,
        address: formData.address,
        ...(formData.address2 && { address2: formData.address2 }),
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

export async function updateContractor(formData: Partial<Contractor>) {
  try {
    const id = formData.id;
    // const session = await getSession();
    // const userId = session?.user.sub;

    if (typeof formData.isPrefixEntityType === "string") {
      formData.isPrefixEntityType = convertToBoolean(
        formData.isPrefixEntityType,
      );
    }

    await prisma.contractor.update({
      where: { id: id },
      data: {
        ...formData,
        updatedBy: "",
      },
    });

    return { success: true, message: "業者情報を更新しました！" };
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.");
  }
}
