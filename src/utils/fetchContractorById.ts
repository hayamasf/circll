import { prisma } from "@/lib/prisma";

export default async function fetchContractorById(id: number) {
  try {
    const contractor = await prisma.contractor.findUnique({
      where: { id },
    });
    return contractor;
  } catch (error) {
    console.error("contractor fetch failed.");
    throw error;
  }
}
