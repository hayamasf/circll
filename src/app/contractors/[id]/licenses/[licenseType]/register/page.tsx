import React from "react";
import PageHeader from "@/components/PageHeader";
import MswLicenseRegistrationForm from "@/components/MswLicenseRegistrationForm";
import IndustrialWasteLicenseRegistrationForm from "@/components/IndustrialWasteLicenseRegistrationForm";

export default async function Page({
  params,
}: {
  params: { id: string; licenseType: "msw" | "industrial-waste" };
}) {
  const id = Number(params.id);
  const licenseType = params.licenseType;

  return (
    <div className="mx-auto max-w-md">
      <PageHeader title="許可情報の登録" />
      {licenseType === "msw" && <MswLicenseRegistrationForm id={id} />}
      {licenseType === "industrial-waste" && (
        <IndustrialWasteLicenseRegistrationForm />
      )}
    </div>
  );
}
