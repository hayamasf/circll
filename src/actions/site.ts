"use server";

import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";
import { Site } from "@/types/types";

export async function createSite(data: Site) {
  let newSiteId: number | undefined;

  try {
    const session = await getSession();
    const userId = session?.user.sub;

    if (!userId) {
      throw new Error("ユーザーIDを確認してください.");
    }

    console.log(data);
    return { success: true, message: "事業所を登録しました." };
  } catch (error) {
    console.error("データの登録に失敗しました.", error);
    throw new Error("データの登録に失敗しました.");
  } finally {
    // redirect("/");
  }
}
