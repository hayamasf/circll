import { prisma } from "@/lib/prisma";

export default async function getContractors(offset: number, limit: number) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const contractors = await prisma.contractor.findMany({
    skip: (offset - 1) * limit,
    take: limit,
  });
  return contractors;
}
