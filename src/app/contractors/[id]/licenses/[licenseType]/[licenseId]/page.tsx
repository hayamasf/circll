import React from "react";
import PageHeader from "@/components/PageHeader";
import MswLicenseDetail from "@/components/MswLicenseDetail";

export default async function Page({ params }: { params: { licenseType: string, licenseId: string } }) {

  const licenseType = params.licenseType;
  const licenseId = Number(params.licenseId);

  return (
    <div className="mx-auto max-w-lg">
      <PageHeader title={"個別の許可証"} />
      {licenseType === "msw" && <MswLicenseDetail id={licenseId} />}
      {licenseType === "industrial-waste" && "産廃"}
    </div>
  );
}
