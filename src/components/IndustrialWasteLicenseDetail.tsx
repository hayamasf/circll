import React from "react";
import getIndustrialWasteLicenseById from "@/utils/getIndustrialWasteLicenseById";
import getIndustrialWasteLicenseIssuingAuthorityName from "@/utils/getIndustrialWasteLiceseIssuingAuthorityName";
import getIndustrialLicenseTypeName from "@/utils/getIndustrialWasteLicenseTypeName";
import { formatDate } from "@/utils/dateUtils";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import IndustrialWasteItemList from "./IndustrialWasteItemList";
import EllipsisDropDownMenu from "./EllipsisDropDownMenu";

export default async function IndustrialWasteLicenseDetail({
  id,
}: {
  id: number;
}) {
  const license = await getIndustrialWasteLicenseById(id);
  const menuItems = [{ id: 1, text: "情報を更新", href: "./" + id + "/edit" }];

  if (license) {
    return (
      <div>
        <h1 className="text-lg font-bold">
          {license.contractor.isPrefixEntityType &&
            license.contractor.entityType}
          {license.contractor.name}
          {license.contractor.entityType &&
            !license.contractor.isPrefixEntityType &&
            license.contractor.entityType}
        </h1>
        <div className="grid gap-y-3">
          <div className="bg-red-300 flex items-center justify-between">
            <h2 className="mt-1 font-semibold">
              {getIndustrialWasteLicenseIssuingAuthorityName(
                license.issuingAuthority,
              )}
              <span className="text-xs font-normal">の</span>
              産業廃棄物 {getIndustrialLicenseTypeName(license.typeCode)}
            </h2>
            <EllipsisDropDownMenu menuItems={menuItems} />
          </div>
          <p className="text-sm">
            許可番号 第{" "}
            <span className="text-lg font-semibold">
              {license.issuingAuthority === 13
                ? license.issuingAuthority
                : license.issuingAuthority.toString().padStart(3, "0")}{" "}
              {license.typeCode}
              {license.authorityCode} {license.contractorCode}
            </span>
          </p>
          <p className="font-semibold">
            {formatDate(license.expirationDate)}
            <span className="font-normal"> まで</span>
          </p>
          <a
            href={license.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 group"
          >
            <PaperClipIcon className="h-5 w-5 group-hover:rounded-md group-hover:border group-hover:border-gray-500" />
            <p className="text-sm group-hover:underline">許可証の写し</p>
          </a>
        </div>
        <div className="my-5">
          <IndustrialWasteItemList licensedItems={license.wasteItems} />
        </div>
      </div>
    );
  }
}
