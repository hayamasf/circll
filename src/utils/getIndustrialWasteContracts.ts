import { prisma } from "@/lib/prisma";

export default async function getIndustrialWasteContracts() {
  const industrialWasteContracts =
    await prisma.contract.findMany({
      where: {contractItem: "industrialWaste"},
      include: { client: true, contractor: true },
    });
  return industrialWasteContracts;
}
