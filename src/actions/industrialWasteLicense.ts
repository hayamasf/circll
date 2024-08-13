"use server";

import { getSession } from "@auth0/nextjs-auth0";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createLicense(data: any) {
  console.log(data);
}
