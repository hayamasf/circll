import { prisma } from "@/lib/prisma";

export async function getIndustrialWasteLicenses(contractorId: number) {
  const licenses = await prisma.industrialWasteLicense.findMany({
    where: { contractorId },
    include: { licensedCategories: true },
  });
  return licenses;
}
