import { prisma } from "@/lib/prisma";

export default async function getTotalClientsCount() {
  const count = await prisma.client.count();
  return count;
}
