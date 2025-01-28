import { prisma } from "@/lib/prisma";

export default async function getClientJwnetId(clientId: number) {
  const jwnetId = 0
  try {
    return jwnetId
  } catch (error) {
    console.error("事業者のJwnet加入者番号取得でエラーが発生しました.");
    throw error;    
  }
}
