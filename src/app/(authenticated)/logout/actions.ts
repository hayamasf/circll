import { redirect } from "next/navigation";

export async function logout() {
  redirect("/clients");
}
