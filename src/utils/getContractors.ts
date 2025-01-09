import { prisma } from "@/lib/prisma";
import { off } from "process";

export default async function getContractors(offset?: number, limit?: number) {
  const skip =
    offset !== undefined && limit !== undefined
      ? (offset - 1) * limit
      : undefined;
  const take = limit !== undefined ? limit : undefined;

  const contractors = await prisma.contractor.findMany({
    ...(skip !== undefined && { skip }),
    ...(take !== undefined && { take }),
  });
  return contractors;
}
