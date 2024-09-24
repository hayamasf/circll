import { prisma } from "@/lib/prisma";

export default async function getSiteById(id: number) {
  try {
    const site = await prisma.site.findUnique({
      where: { id },
      include: { client: true },
    });
    return site;
  } catch (error) {
    console.error("事業所の取得でエラーが発生しました.");
    throw error;
  }
}
