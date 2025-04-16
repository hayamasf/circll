import React from "react";
import PageHeader from "@/components/PageHeader";
import MswLicenseEditForm from "@/components/MswLicenseEditForm";
import getMswLicenseById from "@/utils/getMswLicenseById";
import IndustrialWasteLicenseEditForm from "@/components/IndustrialWasteLicenseEditForm";
import getIndustrialWasteLicenseById from "@/utils/getIndustrialWasteLicenseById";
import getIndustrialWasteCategories from "@/utils/getIndustrialWasteCategories";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function Page(props: {
  params: Promise<{
    type: string;
    ["license-id"]: string;
  }>;
}) {
  const params = await props.params;
  const type = params.type;
  const licenseId = params["license-id"];

  let license;
  let contractorName;
  let pages;
  let breadcrumbs;
  let formComponent;

  switch (type) {
    case "msw":
      license = await getMswLicenseById(Number(licenseId));
      if (!license) {
        return (
          <div className="mx-auto max-w-lg">
            <p>該当の許可証がありません.</p>
          </div>
        );
      }
      contractorName = `${license?.contractor?.isPrefixEntityType ? license?.contractor.entityType : ""}${license?.contractor?.name}${license?.contractor?.entityType && !license.contractor.isPrefixEntityType ? license.contractor.entityType : ""}`;
      pages = [
        { name: "業者", href: "/contractors", current: false },
        {
          name: contractorName || "",
          href: `/contractors/${license?.contractorId}`,
          current: false,
        },
        { name: "許可", href: "", current: false },
        { name: "一般廃棄物", href: "", current: false },
        { name: "編集", href: "", current: true },
      ];
      breadcrumbs = <Breadcrumbs pages={pages} />;
      formComponent = <MswLicenseEditForm license={license} />;

      break;
    case "industrial-waste":
      license = await getIndustrialWasteLicenseById(Number(licenseId));
      contractorName = `${license?.contractor?.isPrefixEntityType ? license?.contractor.entityType : ""}${license?.contractor?.name}${license?.contractor?.entityType && !license.contractor.isPrefixEntityType ? license.contractor.entityType : ""}`;
      pages = [
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
