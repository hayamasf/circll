import { prisma } from "@/lib/prisma";

export default async function getIndustrialWasteContracts() {
  const industrialWasteContracts =
    await prisma.industrialWasteContract.findMany({
      include: { client: true, contractor: true },
    });
  return industrialWasteContracts;
}
