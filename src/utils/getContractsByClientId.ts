import { prisma } from "@/lib/prisma";

export default async function getContractsByClientId(clientId: number) {
  const contracts = await prisma.contract.findMany({
    where: { clientId },
    include: {
      client: true,
      contractor: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return contracts;
}
