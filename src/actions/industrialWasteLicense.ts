"use server";

import { getSession } from "@auth0/nextjs-auth0";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  IndustrialWasteLicense,
  IndustrialWasteCategory,
} from "@prisma/client";

type IndustrialWasteLicenseWithRelations = IndustrialWasteLicense & {
  licensedCategories: IndustrialWasteCategory[];
};

export async function createLicense(
  formData: IndustrialWasteLicenseWithRelations,
) {
  let newLicenseId: number | undefined;

  console.log(formData);

  try {
    const session = await getSession();
    const userId = session?.user.sub;

    if (!userId) {
      throw new Error("ユーザーIDを確認してください.");
    }

    // console.log(formData);

    const newLicense = await prisma.industrialWasteLicense.create({
      data: {
        createdBy: userId,
        contractorId: Number(formData.contractorId),
        issuingAuthority: Number(formData.issuingAuthority),
        typeCode: Number(formData.typeCode),
        authorityCode: Number(formData.authorityCode),
        contractorCode: Number(formData.contractorCode),
        expirationDate: new Date(formData.expirationDate),
        licenseUrl: formData.licenseUrl,
        licensedCategories: {
          connect: formData.licensedCategories.map((id) => ({
            id: Number(id),
          })),
        },
      },
    });

    newLicenseId = newLicense.id;
    revalidatePath(`/contractors/${formData.contractorId}`);
  } catch (error) {
    console.error("データの登録に失敗しました.", error);
    throw new Error("データの登録に失敗しました.");
  } finally {
    if (newLicenseId) {
      redirect(`/contractors/${formData.contractorId}`);
    }
  }
}

export async function updateLicense(formData: any) {
  try {
    console.log(formData);
  } catch (error) {}
}
