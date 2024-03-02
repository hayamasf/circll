"use server";

import { prisma } from "@/lib/prisma";
import { Contractor } from "@/types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";

export async function createContractor(data: Contractor) {
  const session = await getSession();
  const userId = session?.user.sub;

  await prisma.contractor.create({
    data: {
      name: data.name,
      title: data.title,
      representative: data.representative,
      zipCode: data.zipCode,
      prefecture: data.prefecture,
      city: data.city,
      town: data.town,
      address: data.address,
      address2: data.address2,
      createdBy: userId,
    },
  });
  console.log(data);
  revalidatePath("/contractors");
  redirect("/contractors");
}

export async function updateContractor(id: string, data: Partial<Contractor>) {
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

    return {success: true, message: "更新が成功しました."};

  } catch(error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.")
  }
}
