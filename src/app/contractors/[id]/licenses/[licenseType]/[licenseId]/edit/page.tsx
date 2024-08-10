import React from "react";
import PageHeader from "@/components/PageHeader";
import getContractorById from "@/utils/getContractorById";
import MswLicenseEditForm from "@/components/MswLicenseEditForm";
import getMswLicenseById from "@/utils/getMswLicenseById";

export default async function Page({
  params,
}: {
  params: {
    id: string;
    licenseType: "msw" | "industrial-waste";
    licenseId: string;
  };
}) {
  const id = Number(params.id);
  const licenseType = params.licenseType;
  const licenseId = Number(params.licenseId);

  const contractor = await getContractorById(id);
  const license = await getMswLicenseById(licenseId);

  return (
    <div className="mx-auto max-w-lg">
      <PageHeader title="一般廃棄物 許可情報の編集" />
      {licenseType === "msw" && <MswLicenseEditForm license={license} />}
      {licenseType === "industrial-waste" && "ind-waste"}
    </div>
  );
}
