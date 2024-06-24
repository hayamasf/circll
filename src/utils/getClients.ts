import { prisma } from "@/lib/prisma";

export default async function getClients(offset: number, limit: number) {
  const clients = await prisma.client.findMany({
    skip: (offset - 1) * limit,
    take: limit,
  });
  return clients;
}
