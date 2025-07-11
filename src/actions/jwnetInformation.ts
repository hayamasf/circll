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

  if (!clientId && !contractorId) {
    return {
      success: false,
      message: "clientIdもしくはcontractorIdが必要です."
    }
  }

  try {

    if (clientId !== undefined) {
    const existing = await prisma.jwnetInformation.findFirst({
      where: {
        clientId,
        siteId: siteId ?? null,
      },
    });
    if (existing) {
      await prisma.jwnetInformation.update({
        where: {
          id: existing.id,
        },
        data: {
        jwnetId,
        updatedBy: user.id,
        ...(ediKey !== undefined && { ediKey }),
        }
      });
    return {
      success: true,
      message: "JWNET情報を更新しました."
    };
  }
  } 
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
    };
  } catch (error: any) {
    console.error("データベースの処理中にエラー:", error);
    if (error.code === "P2002") {
      return {
        success: false,
        message: "このJWNET IDはすでに存在します."
      }
    }
    return {
      success: false,
      message: "データの保存中にエラーが発生しました."
    }
  }
}
