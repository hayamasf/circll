import { prisma } from "@/lib/prisma";

export default async function getTotalContractorsCount() {
  const count = await prisma.contractor.count();
  return count;
}
