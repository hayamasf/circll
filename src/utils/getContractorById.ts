import { prisma } from "@/lib/prisma";

export default async function getContractorById(id: number) {
  try {
    const contractor = await prisma.contractor.findUnique({
      where: { id },
    });
    return contractor;
  } catch (error) {
    console.error("業者情報の取得に失敗しました.");
    throw error;
  }
}
