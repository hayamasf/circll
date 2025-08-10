import React from "react";
import getIndustrialWasteLicenseById from "@/utils/getIndustrialWasteLicenseById";
import getIndustrialWasteLicenseIssuingAuthorityName from "@/utils/getIndustrialWasteLiceseIssuingAuthorityName";
import getIndustrialLicenseTypeName from "@/utils/getIndustrialWasteLicenseTypeName";
import { formatDate } from "@/utils/dateUtils";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import IndustrialWasteCategoryList from "./IndustrialWasteCategoryList";
import EllipsisDropDownMenu from "./EllipsisDropDownMenu";
import Card from "./Card";
import { formatEntityName } from "@/utils/formatEntityName";
import Breadcrumbs from "./Breadcrumbs";

export default async function IndustrialWasteLicenseDetail({
  id,
}: {
  id: number;
}) {
  const license = await getIndustrialWasteLicenseById(id);
  const menuItems = [{ id: 1, text: "更新する", href: "./" + id + "/edit" }];
  const contractorName = `${license?.contractor?.isPrefixEntityType ? license?.contractor.entityType : ""}${license?.contractor?.name}${license?.contractor?.entityType && !license.contractor.isPrefixEntityType ? license.contractor.entityType : ""}`;

  const pages = [
    { name: "業者", href: "/contractors", current: false },
    {
      name: contractorName || "",
      href: `/contractors/${license?.contractor.id}`,
      current: false,
    },
    { name: "許可", href: "", current: false },
    { name: "産業廃棄物", href: "", current: false },
  ];

  if (license) {
    return (
      <>
        <div className="pt-3 pb-10">
          <Breadcrumbs pages={pages} />
        </div>
        <Card>
          <div className="mt-2 grid gap-y-2">
            <div className="flex items-center justify-between">
              <h3 className="">
                産業廃棄物 {getIndustrialLicenseTypeName(license.typeCode)}
              </h3>
              <EllipsisDropDownMenu menuItems={menuItems} />
            </div>
            <p className="text-sm">
              <span className="text-lg font-semibold">
                {getIndustrialWasteLicenseIssuingAuthorityName(
                  license.issuingAuthority,
                )}
              </span>{" "}
              第{" "}
              <span className="text-lg font-semibold">
                {license.issuingAuthority === 13
                  ? license.issuingAuthority
                  : license.issuingAuthority.toString().padStart(3, "0")}{" "}
                {license.typeCode}
                {license.authorityCode}{" "}
                {license.contractorCode.toString().padStart(6, "0")}
              </span>
            </p>
            <p className="font-semibold">
              {formatDate(license.expirationDate)}
              <span className="font-normal"> まで</span>
            </p>
            {license.licenseUrl && (
              <a
                href={license.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 group"
              >
                <PaperClipIcon className="h-5 w-5 group-hover:rounded-md group-hover:border group-hover:border-gray-500" />
                <p className="text-sm group-hover:underline">許可証の写し</p>
              </a>
            )}
          </div>
          <div className="my-5">
            <IndustrialWasteCategoryList
              licensedCategories={license.licensedCategories}
            />
          </div>
        </Card>
      </>
    );
  }
}
