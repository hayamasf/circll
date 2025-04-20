"use server";
import { redirect } from "next/navigation";

export async function sendResetPasswordEmail(formData: FormData) {
  const email = formData.get("email") as string;

  console.log(email);

  redirect("/forgot-password/confirmation");
}
