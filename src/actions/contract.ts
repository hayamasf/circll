"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@auth0/nextjs-auth0";
import { WasteContractFormData } from "@/types/types";


export async function createContract(formData: WasteContractFormData) {
  try {
      const session = await getSession();
      const userId = session?.user.sub;
    
      if (!userId) {
        throw new Error("ユーザーIDを確認してください.");
      }
    
    console.log(formData)
    console.log(userId)
  } catch (error) {
    console.error("データの登録に失敗しました.", error);
    throw new Error("データの登録に失敗しました.");
  }

}

