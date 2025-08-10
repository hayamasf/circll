"use server";

// import { getSession } from "@auth0/nextjs-auth0";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import type { MswLicense } from "@prisma/client";
import { MswLicenseFormData } from "@/schemas/mswLicenseSchema";
import { createClient } from "@/utils/supabase/server";

export async function createMswLicense(formData: MswLicenseFormData) {
  let newLicenseId: number | undefined;

  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("ユーザーが認証されていません.");
      throw new Error("認証されていません.");
    }

    const newLicense = await prisma.mswLicense.create({
      data: {
        createdBy: user.id,
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

export type MswLicenseUpdateInput = Partial<
  Pick<MswLicense, "expirationDate" | "licenseUrl">
> &
  Pick<MswLicense, "id" | "contractorId">;

export async function updateLicense(input: MswLicenseUpdateInput) {
  const { id, contractorId, ...rest } = input;

  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    console.error("ユーザーが認証されていません.");
    throw new Error("認証されていません.");
  }

  if (!id) {
    throw new Error("許可証のidがありません.");
  }

  const dataToUpdate: { expirationDate?: Date; licenseUrl?: string | null } =
    {};

  if (rest.expirationDate instanceof Date) {
    dataToUpdate.expirationDate = rest.expirationDate;
  }

  if (typeof rest.licenseUrl === "string") {
    dataToUpdate.licenseUrl = rest.licenseUrl;
  }

  await prisma.mswLicense.update({
    where: { id },
    data: {
      ...dataToUpdate,
      updatedBy: user.id,
    },
  });
  revalidatePath(`/contractors/${contractorId}`);
  redirect(`/contractors/${contractorId}`);
}
