import React from "react";
import PageHeader from "@/components/PageHeader";
import getContractorById from "@/utils/getContractorById";
import MswLicenseEditForm from "@/components/MswLicenseEditForm";

export default async function Page({ params }: { params: { id: string, licenseType: "msw" | "industrial-waste", licenseId: string } }) {

  const id = Number(params.id);
  const licenseType = params.licenseType;
  const licenseId = params.licenseId;

  const contractor = await getContractorById(id);

  return (
    <div className="mx-auto max-w-lg">
      <PageHeader title="一般廃棄物 許可情報の編集" />
      {licenseType === "msw" && <MswLicenseEditForm props={contractor} />}
      {licenseType === "industrial-waste" && "ind-waste"}
    </div>
  );
}
