"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function logout() {
  const supabase = await createClient();

  console.log("server actions");
  redirect("/clients");
}
