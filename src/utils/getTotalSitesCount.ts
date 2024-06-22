import { prisma } from "@/lib/prisma";

export default async function getTotalSitesCount (clientId? : number) {
  const count = await prisma.site.count(
    {
      where: clientId ? {clientId} : {},
    })
    return count;
}
