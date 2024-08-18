import { prisma } from "@/lib/prisma";

export default async function getIndustrialWasteItems() {
  const items = await prisma.wasteItem.findMany();

  return items;
}
