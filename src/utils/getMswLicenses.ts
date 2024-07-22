import { prisma } from "@/lib/prisma";

export default async function getMswLicenses(contractorId: number) {
  const licenses = await prisma.mswLicense.findMany({
    where: { contractorId },
  });
  return licenses;
}
