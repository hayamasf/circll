import { prisma } from "@/lib/prisma";

export default async function getIndustrialWasteCategories() {
  const industrialWasteCategories =
    await prisma.industrialWasteCategory.findMany();

  return industrialWasteCategories;
}
