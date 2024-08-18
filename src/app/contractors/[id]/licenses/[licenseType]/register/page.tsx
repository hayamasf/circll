import React from "react";
import PageHeader from "@/components/PageHeader";
import MswLicenseRegistrationForm from "@/components/MswLicenseRegistrationForm";
import IndustrialWasteLicenseRegistrationForm from "@/components/IndustrialWasteLicenseRegistrationForm";
import getIndustrialWasteItems from "@/utils/getIndustrialWasteItems";

export default async function Page({
  params,
}: {
  params: { id: string; licenseType: "msw" | "industrial-waste" };
}) {
  const id = Number(params.id);
  const licenseType = params.licenseType;

  if (licenseType === "industrial-waste") {
    const items = await getIndustrialWasteItems();

    return (
      <div className="mx-auto max-w-md">
        <PageHeader title="許可情報の登録" />
        <IndustrialWasteLicenseRegistrationForm id={id} items={items} />
      </div>
    );
  } else if (licenseType === "msw") {
    return (
      <div className="mx-auto max-w-md">
        <PageHeader title="許可情報の登録" />
        <MswLicenseRegistrationForm id={id} />
      </div>
    );
  }
}
