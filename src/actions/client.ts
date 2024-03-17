"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getSession } from "@auth0/nextjs-auth0";
import { ContractParty } from "@/types/types";

export async function createClient(data: ContractParty) {
  try {
    const session = await getSession();
    const userId = session?.user.sub;

    await prisma.client.create({
      data: {
        createdBy: userId,
        entityType: data.entityType,
        isPrefixEntityType: data.isPrefixEntityType,
        name: data.name,
        tradeName: data.tradeName,
        title: data.title,
        representative: data.representative,
        zipCode: data.zipCode,
        prefecture: data.prefecture,
        city: data.city,
        town: data.town,
        address: data.address,
        address2: data.address2,
      },
    });
    console.log(data);
    revalidatePath("/clients");
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.");
  }

  // erros if redirect inside try-catch;
  redirect("/clients");
}
