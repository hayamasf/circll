import { prisma } from "@/lib/prisma";

export default async function getSitesByClientId(clientId: number) {
  return await prisma.site.findMany({
    where: { clientId },
    orderBy: { id: "asc" },
  });
}
