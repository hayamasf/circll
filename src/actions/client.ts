"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getSession } from "@auth0/nextjs-auth0";
import convertToBoolean from "@/utils/convertToBoolean";
import { LegalEntity } from "@/types/types";

export async function createClient(data: LegalEntity) {
  let isPrefixEntityType;

  if (
    data.isPrefixEntityType !== undefined &&
    data.isPrefixEntityType !== null
  ) {
    isPrefixEntityType = convertToBoolean(data.isPrefixEntityType);
  }

  let newClientId: number | undefined;

  try {
    const session = await getSession();
    const userId = session?.user.sub;

    if (!userId) {
      throw new Error("ユーザーIDを確認してください.");
    }

    const newClient = await prisma.client.create({
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
        postalCode: data.postalCode,
        prefecture: data.prefecture,
        city: data.city,
        town: data.town,
        address: data.address,
        ...(data.address2 && { address2: data.address2 }),
      },
    });

    newClientId = newClient.id;

    console.log(data);
    revalidatePath(`/clients/${newClientId}`);
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.");
  } finally {
    if (newClientId !== undefined) {
      redirect(`/clients/${newClientId}`);
    }
  }
}

export async function updateClient(data: Partial<LegalEntity>) {
  try {
    const id = data.id;
    const session = await getSession();
    const userId = session?.user.sub;

    await prisma.client.update({
      where: { id: id },
      data: {
        ...data,
        updatedBy: userId,
      },
    });

    console.log(data);
    return { success: true, message: "更新が成功しました." };
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.");
  }
}
