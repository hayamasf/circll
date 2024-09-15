import { prisma } from "@/lib/prisma";

export default async function getIndustrialWasteItems() {
  const industrialWasteItems = await prisma.wasteItem.findMany();

  return industrialWasteItems;
}
