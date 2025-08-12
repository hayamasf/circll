"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Site } from "@/types/types";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSite(data: Site) {
  let newSiteId: number | undefined;

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

    const newSite = await prisma.site.create({
      data: {
        createdBy: user.id,
        clientId: data.clientId,
        name: data.name,
        postalCode: data.postalCode,
        prefecture: data.prefecture,
        city: data.city,
        town: data.town,
        address: data.address,
        ...(data.address2 && { address2: data.address2 }),
      },
    });
    newSiteId = newSite.id;
    revalidatePath("/sites");
  } catch (error) {
    console.error("データの登録に失敗しました.", error);
    throw new Error("データの登録に失敗しました.");
  } finally {
    if (newSiteId !== undefined) {
      redirect(`/clients/${data.clientId}/sites/${newSiteId}`);
    }
  }
}

export async function updateSite(data: Partial<Site>) {
  try {
    const id = data.id;

    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("ユーザーが認証されていません.");
      throw new Error("認証されていません.");
    }

    await prisma.site.update({
      where: { id },
      data: {
        ...data,
        updatedBy: user.id,
      },
    });

    return { success: true, message: "事業所情報を更新しました！" };
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.");
  }
}
