import { prisma } from "@/lib/prisma";
import { JwnetInformationFormData } from "@/schemas/jwnetInformationSchema";

export async function getJwnetInformationByClientId(id: number): 
Promise<Pick<JwnetInformationFormData, "jwnetId" | "ediKey"> | undefined>
 {
  const info = await prisma.jwnetInformation.findFirst({
    where: {clientId: id},
    orderBy: {id: "desc"},
  })

  if (!info) {
    return undefined;
  }

  return {
    jwnetId: info.jwnetId,
    ediKey: info.ediKey ?? undefined,
  }
}

export async function getJwnetInformationByContractorId(id: number):
Promise<Pick<JwnetInformationFormData, "jwnetId"> | undefined>
{
  const info = await prisma.jwnetInformation.findFirst({
    where: {contractorId: id},
    orderBy: { id: "desc"},
  })

  if (!info) {
    return undefined;
  }

  return {
    jwnetId: info.jwnetId
  }
}
