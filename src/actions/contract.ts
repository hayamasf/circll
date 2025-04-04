"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@auth0/nextjs-auth0";
import { WasteContractFormData } from "@/types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createContract(formData: WasteContractFormData) {
  let newContract;

  try {
    const session = await getSession();
    const userId = session?.user.sub;

    if (!userId) {
      throw new Error("ユーザーIDを確認してください.");
    }

    if (formData.waste === "industrial-waste") {
      newContract = await prisma.industrialWasteContract.create({
        data: {
          createdBy: userId,
          clientId: formData.clientId,
          contractorId: formData.contractorId,
          type: formData.type,
          endDate: formData.endDate,
          isAutoRenew: formData.isAutoRenew,
        },
      });
    }

    revalidatePath("/contracts")
  } catch (error) {
    console.error("データの登録に失敗しました.", error);
    throw new Error("データの登録に失敗しました.");
  } finally {
    console.log("finally");
    redirect("/contracts")
  }
}
