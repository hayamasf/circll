"use server";

import { getSession } from "@auth0/nextjs-auth0";
import { Client } from "@/types/types";

export async function createClient(data: Client) {
  const session = await getSession();
  const userId = session?.user.sub;

  console.log(userId);
  console.log(data)
}
