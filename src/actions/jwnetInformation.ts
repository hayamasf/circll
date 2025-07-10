"use server";

import { prisma } from "@/lib/prisma";
import { JwnetInformationFormData } from "@/schemas/jwnetInformationSchema";
import { createClient } from "@/utils/supabase/server";

export async function createOrUpdateJwnetInformation(submittedData:JwnetInformationFormData) {
  
  const supabase = await createClient();

  const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

  if (authError || !user) {
      console.error("ユーザーが認証されていません.");
      throw new Error("認証されていません.");
    }

  const { clientId, contractorId, siteId, jwnetId, ediKey } = submittedData;

  let existing;

  if (clientId !== undefined) {
    existing = await prisma.jwnetInformation.findUnique({where: {clientId}})
  } else if (contractorId !== undefined) {
    existing = await prisma.jwnetInformation.findUnique({where : {contractorId}})
  } else if (siteId !== undefined) {
    existing = await prisma.jwnetInformation.findUnique({where: {siteId}})
  } else {
    return {
      success: false,
      message: "対象EntityのIdが指定されていません."
    }
  }

  try {
    if (existing) {
    await prisma.jwnetInformation.update({
      where: {id: existing.id},
      data: {
        jwnetId,
        updatedBy: user.id,
        ...(ediKey !== undefined && { ediKey }),
      }
    })
    return {
      success: true,
      message: "JWNET情報を更新しました."
    }
  } else {
    await prisma.jwnetInformation.create({
      data: {
        jwnetId,
        ...(ediKey !== undefined && { ediKey }),
        createdBy: user.id,
        updatedBy: user.id,
        ...(clientId !== undefined && { clientId}),
        ...(contractorId !== undefined && {contractorId}),
        ...(siteId !== undefined && { siteId}),
      }
    })
    return {
      success: true,
      message: "JWNET情報を新規登録しました."
    }
  }
  } catch (error) {
    console.error("データベースの処理中にエラー:", error);
    return {
      success: false,
      message: "データの保存中にエラーが発生しました."
    }
  }
}
