import React from "react";
import { prisma } from "@/lib/prisma";

const getLicenseById = async (id: number) => {

  try {
    const license = await prisma.mswLicense.findUnique({
      where: { id }
    });
    return license;

  } catch (error) {
    console.error("一般廃棄物処理業許可情報の取得でエラーが発生しました.");
    throw error;
  }
}

export default async function MswLicenseDetail({ id }: { id: number }) {
  const license = await getLicenseById(id);

  if (!license) {
    return "<div>Error: 許可証が見つかりません.</div>"
  }

  return (
    <>
      <div></div>
      <div>{license?.licenseUrl}</div>
    </>
  )
}