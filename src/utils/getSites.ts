import { prisma } from "@/lib/prisma";

export default async function getSites(clientId?: number) {
  const sites = await prisma.site.findMany({
    where: clientId ? { clientId } : {},
  });
  return sites;
}
