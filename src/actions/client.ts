"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getSession } from "@auth0/nextjs-auth0";
import { LegalEntity } from "@/types/types";

export async function createClient(data: LegalEntity) {
  let newClientId: number | undefined;

  try {
    const session = await getSession();
    const userId = session?.user.sub;

    if (!userId) {
      throw new Error("不正なユーザーIDです.");
    }

    const newClient = await prisma.client.create({
      data: {
        createdBy: userId,
        ...(data.entityType && { entityType: data.entityType }),
        ...(data.isPrefixEntityType && {
          isPrefixEntityType: data.isPrefixEntityType,
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

// export async function fetchClient(id: number) {
//   try {
//     const clientData = await prisma.client.findUnique({
//       where: { id: id },
//     });
//     return clientData;
//   } catch (error) {
//     console.error("顧客データの取得に失敗しました.");
//   }
// }
