"use server";

import { prisma } from "@/lib/prisma";

export async function getMunicipalites(prefectureId: number) {
  const municipalities = await prisma.municipality.findMany({
    where: { prefectureId },
  });
  return municipalities;
}
