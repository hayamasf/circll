import React from "react";
import getIndustrialWasteLicenseById from "@/utils/getIndustrialWasteLicenseById";
import { formatDate } from "@/utils/dateUtils";
import { PaperClipIcon } from "@heroicons/react/24/outline";

export default async function IndustrialWasteLicenseDetail({ id }: { id: number }) {

  const license = await getIndustrialWasteLicenseById(id);
  if (license) {
    return (
      <div>
        <h1 className="text-lg font-bold">
          {license.contractor.isPrefixEntityType && license.contractor.entityType}
          {license.contractor.name}
          {license.contractor.entityType && !license.contractor.isPrefixEntityType && license.contractor.entityType}
        </h1>
        <h2 className="mt-3">産業廃棄物処理業許可</h2>
        <p>許可番号 第<span className="font-bold">{license.issuingAuthority} {license.typeCode}{license.authorityCode} {license.contractorCode}</span></p>
        <p className="font-bold">{formatDate(license.expirationDate)}<span className="font-normal"> まで</span></p>
        <div className="flex">
          <a
            href={license.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group ml-5"
          >            許可証の写し
          </a>

          <PaperClipIcon className="h-5 w-5 group-hover: underline" />
        </div>
      </div>
    )
  }
}