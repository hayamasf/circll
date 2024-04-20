"use server";

import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";
import { Site } from "@/types/types";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSite(data: Site) {
  let newSiteId: number | undefined;

  try {
    const session = await getSession();
    const userId = session?.user.sub;

    if (!userId) {
      throw new Error("ユーザーIDを確認してください.");
    }

    console.log(data);

    const newSite = await prisma.site.create({
      data: {
        createdBy: userId,
        clientId: data.clientId,
        name: data.name,
        postalCode: data.postalCode,
        prefecture: data.prefecture,
        city: data.city,
        town: data.town,
        address: data.address,
        ...(data.address2 && { address2: data.address2 }),
      },
    });
    newSiteId = newSite.id;
    revalidatePath(`/clients/${data.clientId}/sites/${newSiteId}`);
  } catch (error) {
    console.error("データの登録に失敗しました.", error);
    throw new Error("データの登録に失敗しました.");
  } finally {
    if (newSiteId !== undefined) {
      redirect(`/clients/${data.clientId}/sites/${newSiteId}`);
    }
  }
}
