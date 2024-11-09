"use server";

import { getSession } from "@auth0/nextjs-auth0";
import { prisma } from "@/lib/prisma";
import { MswLicense } from "@/types/types";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createLicense(formData: MswLicense) {
  let newLicenseId: number | undefined;

  try {
    const session = await getSession();
    const userId = session?.user.sub;

    if (!userId) {
      throw new Error("ユーザーIDを確認してください.");
    }

    console.log(formData);

    const newLicense = await prisma.mswLicense.create({
      data: {
        createdBy: userId,
        contractorId: Number(formData.contractorId),
        municipalityId: Number(formData.municipalityId),
        type: Number(formData.type),
        expirationDate: new Date(formData.expirationDate),
        licenseUrl: formData.licenseUrl,
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

export async function updateLicense(formData: Partial<MswLicense>) {
  try {
    const { id, municipality, ...dataToUpdate } = formData;
    if (!id) {
      throw new Error("許可証のidがありません.");
    }
    const session = await getSession();
    const userId = session?.user.sub;

    await prisma.mswLicense.update({
      where: { id },
      data: {
        ...dataToUpdate,
        updatedBy: userId,
      },
    });

    revalidatePath(`/contractors/${formData.contractorId}`);
  } catch (error) {
    console.error(error);
  } finally {
    redirect(`/contractors/${formData.contractorId}`);
  }
}
