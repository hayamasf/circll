"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ContractSitesFormData } from "@/schemas/contractSitesSchema";
import { ContractFormData } from "@/schemas/contractSchema";
import { createClient } from "@/utils/supabase/server";

export async function createContract(formData: ContractFormData) {
  let newContract;

  try {

    const supabase = await createClient();

    const {
      data: {user},
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("ユーザーが認証されていません.")
      throw new Error("認証されていません.")
    }

    if (formData.contractItem === "industrialWaste") {
      newContract = await prisma.contract.create({
        data: {
          createdBy: user.id,
          clientId: formData.clientId,
          contractorId: formData.contractorId,
          contractItem: formData.contractItem,
          contractType: formData.contractType,
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

    await prisma.contract.update({
      where: { id: contractId },
      data: {
        sites: {
          set: [],
          connect: siteIds.map((id) => ({ id })),
        },
      },
    });
    return { success: true };
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    return { success: false, message: "更新に失敗しました." };
  }
}
