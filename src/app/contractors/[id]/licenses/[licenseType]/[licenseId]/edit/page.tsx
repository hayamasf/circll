import React from "react";
import PageHeader from "@/components/PageHeader";
import MswLicenseEditForm from "@/components/MswLicenseEditForm";
import getMswLicenseById from "@/utils/getMswLicenseById";
import IndustrialWasteLicenseEditForm from "@/components/IndustrialWasteLicenseEditForm";
import getIndustrialWasteLicenseById from "@/utils/getIndustrialWasteLicenseById";
import getIndustrialWasteCategories from "@/utils/getIndustrialWasteCategories";
import Breadcrumbs from "@/components/Breadcrumbs";

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
  let breadcrumbs;
  let formComponent;

  switch (licenseType) {
    case "msw":
      license = await getMswLicenseById(Number(licenseId));
      formComponent = <MswLicenseEditForm />;
      break;
    case "industrial-waste":
      license = await getIndustrialWasteLicenseById(Number(licenseId));
      const contractorName = `${license?.contractor?.isPrefixEntityType ? license?.contractor.entityType : ""}${license?.contractor?.name}${license?.contractor?.entityType && !license.contractor.isPrefixEntityType ? license.contractor.entityType : ""}`;
      const pages = [
        { name: "業者", href: "/contractors", current: false },
        {
          name: contractorName || "",
          href: `/contractors/${license?.contractorId}`,
          current: false,
        },
        { name: "許可", href: "", current: false },
        { name: "産業廃棄物", href: "", current: false },
        { name: "編集", href: "", current: true },
      ];

      const industrialWasteCategories = await getIndustrialWasteCategories();
      breadcrumbs = <Breadcrumbs pages={pages} />;
      formComponent = (
        <IndustrialWasteLicenseEditForm
          license={license}
          industrialWasteCategories={industrialWasteCategories}
        />
      );
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
      <div className="pt-3 pb-10">{breadcrumbs}</div>
      {formComponent}
    </div>
  );
}
