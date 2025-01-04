"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getSession } from "@auth0/nextjs-auth0";
import convertToBoolean from "@/utils/convertToBoolean";
import { Client } from "@prisma/client";
import { LegalEntityFormData } from "@/types/types";

export async function createClient(formData: LegalEntityFormData) {
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

    newClientId = newClient.id;

    console.log(formData);
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

export async function updateClient(formData: Partial<Client>) {
  try {
    const id = formData.id;
    const session = await getSession();
    const userId = session?.user.sub;

    if (typeof formData.isPrefixEntityType === "string") {
      formData.isPrefixEntityType = convertToBoolean(
        formData.isPrefixEntityType,
      );
    }

    await prisma.client.update({
      where: { id: id },
      data: {
        ...formData,
        updatedBy: userId,
      },
    });

    // to be removed
    console.log(formData);

    return { success: true, message: "更新が成功しました." };
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.");
  }
}

export async function getClientsByName(search: string) {

  console.log("検索：", search)

  const clients = await prisma.client.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    select : {id: true, entityType: true, name: true},
  })
  console.log("検索結果：", clients)
  return clients;
}