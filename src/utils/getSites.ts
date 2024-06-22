import { prisma } from "@/lib/prisma";

export default async function getSites(
  offset: number,
  limit: number,
  clientId?: number,
) {
  const sites = await prisma.site.findMany({
    where: clientId ? { clientId } : {},
    skip: (offset - 1) * limit,
    take: limit,
  });
  return sites;
}
