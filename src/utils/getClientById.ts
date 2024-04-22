import { prisma } from "@/lib/prisma";

export default async function getClientById(id: number) {
  try {
    const client = await prisma.client.findUnique({
      where: { id },
    });
    return client;
  } catch (error) {
    console.error("client fetch failed.");
    throw error;
  }
}
