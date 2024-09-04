import { prisma } from "@/lib/prisma";

export default async function getIndustrialWasteLicenseById(id: number) {
try {
  const license = await prisma.industrialWasteLicense.findUnique({where: {id}, include: {contractor: true,}})
return license
} catch (error) {
  console.error("産業廃棄物処理業許可情報の取得に失敗しました.");
  throw error;
}
  
}