"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getSession } from "@auth0/nextjs-auth0";
import { LegalEntity } from "@/types/types";
import convertToBoolean from "@/utils/convertToBoolean";

export async function createContractor(data: LegalEntity) {
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
        ...(data.title && { title: data.title }),
        ...(data.representative && { representative: data.representative }),
        ...(data.tradeName && { tradeName: data.tradeName }),
        zipCode: data.zipCode,
        prefecture: data.prefecture,
        city: data.city,
        town: data.town,
        address: data.address,
        ...(data.address2 && { address2: data.address2 }),
      },
    });

    newContractorId = newContractor.id;

    console.log(data);
    revalidatePath(`/contractors/${newContractorId}`);
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.");
  } finally {
    if (newContractorId !== undefined) {
      redirect(`/contractors/${newContractorId}`);
    }
  }
}

export async function updateContractor(id: number, data: Partial<LegalEntity>) {
  try {
    const session = await getSession();
    const userId = session?.user.sub;

    await prisma.contractor.update({
      where: { id: id },
      data: {
        ...data,
        updatedBy: userId,
      },
    });

    return { success: true, message: "更新が成功しました." };
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.");
  }
}

// export async function fetchContractor(id: number) {
//   try {
//     const contractor = await prisma.client.findUnique({
//       where: { id: id },
//     });
//     return contractor;
//   } catch (error) {
//     console.error("業者データの取得に失敗しました.");
//   }
// }
