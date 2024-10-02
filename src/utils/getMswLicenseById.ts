import { prisma } from "@/lib/prisma";

export default async function getMswLicenseById(id: number) {
  try {
    const license = await prisma.mswLicense.findUnique({ where: { id }, include: {contractor: true, municipality: true} });
    return license;
  } catch (error) {
    console.error("一般廃棄物許可情報の取得に失敗しました.");
    throw error;
  }
}
