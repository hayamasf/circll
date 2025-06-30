import { prisma } from "@/lib/prisma";

export default async function getContractById(type: string, id: number) {
  try {
    if (type === "industrial-waste") {
      const contract = await prisma.industrialWasteContract.findUnique({
        where: { id },
        include: {
          client: {
            include: {
              sites: true,
            },
          },
          contractor: true,
          sites: true,
        },
      });
      return contract;
    } else if (type === "msw") {
      const contract = "";
      return contract;
    } else {
      throw new Error("不明な契約タイプです: " + type);
    }
  } catch (error) {
    console.error("契約内容の取得に失敗しました.");
    throw error;
  }
}
