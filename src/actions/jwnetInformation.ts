"use server";

import { prisma } from "@/lib/prisma";
import { JwnetInformationFormData } from "@/schemas/jwnetInformationSchema";

export async function updateJwnetInformation(
  formData: JwnetInformationFormData,
) {
  console.log(formData);
}
