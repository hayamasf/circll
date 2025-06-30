"use server";

import { userProfileSchema } from "@/schemas/userProfileSchema";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";

export async function userProfileUpdate(
  formData: unknown,
): Promise<{ success: true } | { success: false; message: string }> {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("ユーザーが認証されていません.");
      throw new Error("認証されていません.");
    }

    const result = userProfileSchema.safeParse(formData);

    if (!result.success) {
      console.error("バリデーションエラー", result.error.format());
      throw new Error("入力に誤りがあります.");
    }

    const { displayName } = result.data;

    await prisma.user.update({ where: { id: user.id }, data: { displayName } });

    return { success: true };
  } catch (error) {
    console.error("プロフィールの更新に失敗しました.", error);
    return { success: false, message: "プロフィールの更新に失敗しました." };
  }
}
