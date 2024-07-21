"use server";

import { getSession } from "@auth0/nextjs-auth0";
import { prisma } from "@/lib/prisma";
import { MswLicense } from "@/types/types";
import { redirect } from "next/navigation";

export async function createLicense(data: MswLicense) {

  let newLicenseId: number | undefined;

  try {
    const session = await getSession();
    const userId = session?.user.sub;

    if (!userId) {
      throw new Error("ユーザーIDを確認してください.");
    }

    console.log(data);

    const newLicense = await prisma.mswLicense.create({
      data: {
        createdBy: userId,
        contractorId: Number(data.contractorId),
        prefectureId: Number(data.prefectureId),
        municipalityId: Number(data.municipalityId),
        type: Number(data.type),
        expirationDate: new Date(data.expirationDate),
        licenseUrl: data.licenseUrl,
      }
    })

    newLicenseId = newLicense.id

  } catch (error) {
    console.error("データの登録に失敗しました.", error);
    throw new Error("データの登録に失敗しました.");
  } finally {
    if(newLicenseId) {
      redirect(`/contractors/${data.contractorId}/licenses/msw/${newLicenseId}`)
    }
  }
}
