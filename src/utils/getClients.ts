import { prisma } from "@/lib/prisma";

export default async function getClients(offset?: number, limit?: number) {

  const skip = offset !== undefined && limit !== undefined ? (offset - 1) * limit : undefined;
  const take = limit !== undefined ? limit : undefined
  const clients = await prisma.client.findMany({
    ...(skip !== undefined && {skip}),
    ...(take !== undefined && {take}),
  });
  return clients;
}
