"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PasswordFormValues } from "@/schemas/passwordSchema";

export async function signIn(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error(error.message);
    return { error: error.message };
  }
  return { success: true };
}

// パスワード更新用のメール送信
export async function sendResetPasswordEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
  });

  if (error) {
    console.error("パスワードリセットメール送信エラー", error.message);
    throw new Error("メール送信に失敗しました.");
  }

  redirect("/forgot-password/confirmation");
}

// パスワードの更新
export async function updateUser(formData: PasswordFormValues) {
  const supabase = await createClient();

  const data = { password: formData.password };
  console.log(formData);

  const { error } = await supabase.auth.updateUser(data);

  if (error) {
    return { success: false, message: error.message };
  }

  return {
    success: true,
    message: "パスワード設定完了!",
  };
}

// ログアウト
export type SignOutFormState = {
  message: string | null;
};

export async function signOut(_prevState: {
  message: string | null;
}): Promise<SignOutFormState> {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("ログアウトエラー:", error.message);
    return { message: "ログアウトに失敗しました." };
  }

  redirect("/sign-in");
}
