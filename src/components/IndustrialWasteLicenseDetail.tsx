import React from "react";
import getIndustrialWasteLicenseById from "@/utils/getIndustrialWasteLicenseById";
import getIndustrialWasteLicenseIssuingAuthorityName from "@/utils/getIndustrialWasteLiceseIssuingAuthorityName";
import getIndustrialLicenseTypeName from "@/utils/getIndustrialWasteLicenseTypeName";
import { formatDate } from "@/utils/dateUtils";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import IndustrialWasteItemList from "./IndustrialWasteItemList";
import EllipsisDropDownMenu from "./EllipsisDropDownMenu";
import PageHeader from "./PageHeader";
import Card from "./Card";
import Link from "next/link";

export default async function IndustrialWasteLicenseDetail({
  id,
}: {
  id: number;
}) {
  const license = await getIndustrialWasteLicenseById(id);
  const menuItems = [{ id: 1, text: "情報を更新", href: "./" + id + "/edit" }];

  if (license) {
    return (
      <>
        <PageHeader title="許可情報" />
        <Card>
          <Link
            className="hover:underline"
            href={"/contractors/" + license.contractorId}
          >
            <h2>
              {license.contractor.isPrefixEntityType &&
                license.contractor.entityType}
              {license.contractor.name}
              {license.contractor.entityType &&
                !license.contractor.isPrefixEntityType &&
                license.contractor.entityType}
            </h2>
          </Link>
          <div className="mt-2 grid gap-y-2">
            <div className="flex items-center justify-between">
              <h3 className="">
                {getIndustrialWasteLicenseIssuingAuthorityName(
                  license.issuingAuthority,
                )}
                <span className="text-xs">の</span>
                産業廃棄物 {getIndustrialLicenseTypeName(license.typeCode)}
              </h3>
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
        </Card>
      </>
    );
  }
}
