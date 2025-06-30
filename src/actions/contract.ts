"use server";

import { prisma } from "@/lib/prisma";
// import { getSession } from "@auth0/nextjs-auth0";
import { WasteContractFormData } from "@/types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ContractSitesFormData } from "@/schemas/contractSitesSchema";
import { number } from "zod";

export async function createContract(formData: WasteContractFormData) {
  let newContract;

  try {
    // const session = await getSession();
    // const userId = session?.user.sub;

    // if (!userId) {
    //   throw new Error("ユーザーIDを確認してください.");
    // }

    if (formData.waste === "industrial-waste") {
      newContract = await prisma.industrialWasteContract.create({
        data: {
          createdBy: "",
          clientId: formData.clientId,
          contractorId: formData.contractorId,
          type: formData.type,
          endDate: formData.endDate,
          isAutoRenew: formData.isAutoRenew,
        },
      });
    }

    revalidatePath("/contracts");
  } catch (error) {
    console.error("データの登録に失敗しました.", error);
    throw new Error("データの登録に失敗しました.");
  } finally {
    console.log("finally");
    redirect("/contracts");
  }
}

export async function updateIndustrialWasteContractSites(
  contractId: number,
  formData: string[],
) {
  try {
    const siteIds = formData.map(Number);

    console.log(contractId, siteIds);

    await prisma.industrialWasteContract.update({
      where: { id: contractId },
      data: {
        sites: {
          set: [],
          connect: siteIds.map((id) => ({ id })),
        },
      },
    });
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
  }
}
