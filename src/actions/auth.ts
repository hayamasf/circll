"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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

  redirect("/reset-password");
}
