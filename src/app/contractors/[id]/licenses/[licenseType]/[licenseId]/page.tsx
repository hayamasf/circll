import React from "react";
import PageHeader from "@/components/PageHeader";
import MswLicenseDetail from "@/components/MswLicenseDetail";
import IndustrialWasteLicenseDetail from "@/components/IndustrialWasteLicenseDetail";

export default async function Page({
  params,
}: {
  params: { licenseType: string; licenseId: string };
}) {
  const licenseType = params.licenseType;
  const licenseId = Number(params.licenseId);


  return (
    <div className="mx-auto max-w-lg">
      {licenseType === "msw" && <MswLicenseDetail id={licenseId} />}
      {licenseType === "industrial-waste" && <IndustrialWasteLicenseDetail id={licenseId} />}

    </div>
  );
}
