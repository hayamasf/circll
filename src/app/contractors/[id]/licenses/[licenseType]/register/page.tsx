import React from "react";
import PageHeader from "@/components/PageHeader";

export default async function Page({ params }: { params: { id: string, licenseType: "msw" | "industrial-waste" } }) {

  const id = Number(params.id);
  const licenseType = params.licenseType;

  return (
    <div className="mx-auto max-w-lg">
      <PageHeader title="許可情報の登録" />
      <div>許可証の登録 {licenseType}</div>

    </div>
  );
}
