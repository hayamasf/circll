"use server";

import { prisma } from "@/lib/prisma";

export async function getPrefectures() {
  const prefectures = await prisma.prefecture.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return prefectures;
}
