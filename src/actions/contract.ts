"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@auth0/nextjs-auth0";
import { WasteContractFormData } from "@/types/types";

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

    if (formData.waste === "msw") {
      console.log("産廃");
    }

    console.log(formData);
  } catch (error) {
    console.error("データの登録に失敗しました.", error);
    throw new Error("データの登録に失敗しました.");
  } finally {
    console.log("finally");
  }
}
