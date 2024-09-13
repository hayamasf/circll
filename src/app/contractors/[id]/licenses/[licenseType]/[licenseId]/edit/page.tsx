import React from "react";
import PageHeader from "@/components/PageHeader";
import MswLicenseEditForm from "@/components/MswLicenseEditForm";
import getMswLicenseById from "@/utils/getMswLicenseById";
import IndustrialWasteLicenseEditForm from "@/components/IndustrialWasteLicenseEditForm";
import getIndustrialWasteLicenseById from "@/utils/getIndustrialWasteLicenseById";

export default async function Page({
  params,
}: {
  params: {
    licenseType: string;
    licenseId: string;
  };
}) {
  const { licenseType, licenseId } = params;

  let license;
  let formComponent;

  switch (licenseType) {
    case "msw":
      license = await getMswLicenseById(Number(licenseId));
      formComponent = <MswLicenseEditForm />;
      break;
    case "industrial-waste":
      license = await getIndustrialWasteLicenseById(Number(licenseId));
      formComponent = <IndustrialWasteLicenseEditForm license={license} />;
      break;
    default:
      return (
        <div className="mx-auto max-w-lg">
          <PageHeader title="エラー" />
          <p className="text-red-500">不明な許可証のタイプです.</p>
        </div>
      );
  }

  return (
    <div className="mx-auto max-w-lg">
      <PageHeader title={"許可情報の編集"} />
      {formComponent}
    </div>
  );
}
