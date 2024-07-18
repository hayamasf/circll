"use server";

import { getSession } from "@auth0/nextjs-auth0";

export async function createLicense(data: any) {
  try {
    const session = await getSession();
    const userId = session?.user.sub;

    if (!userId) {
      throw new Error("ユーザーIDを確認してください.");
    }

    console.log(data);
  } catch (error) {
    console.error("データの更新に失敗しました.", error);
    throw new Error("データの更新に失敗しました.");
  } finally {
    console.log("final");
  }
}
