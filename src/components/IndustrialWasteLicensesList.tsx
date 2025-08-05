import React from "react";

import Link from "next/link";
import {
  IndustrialWasteLicense,
  IndustrialWasteCategory,
} from "@prisma/client";
import { getDaysUntilExpiration } from "@/utils/dateUtils";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { formatDate } from "@/utils/dateUtils";

import PlusButton from "./PlusButton";
import getIndustrialLicenseTypeName from "@/utils/getIndustrialWasteLicenseTypeName";
import getIndustrialWasteLicenseIssuingAuthorityName from "@/utils/getIndustrialWasteLiceseIssuingAuthorityName";

export default async function IndustrialWasteLicensesList({
  licenses,
  contractorId,
}: {
  licenses: (IndustrialWasteLicense & {
    licensedCategories: IndustrialWasteCategory[];
  })[];
  contractorId: number;
}) {
  return (
    <div className="grid gap-y-5">
      <ul role="list" className="divide-y divide-gray-100">
        {licenses.map((license) => {
          const daysLeft = getDaysUntilExpiration(license.expirationDate);
          return (
            <li
              key={license.id}
              className="px-2 relative flex justify-between gap-x-6 py-3 hover:bg-gray-50"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    <Link
                      href={`./${contractorId}/licenses/industrial-waste/${license.id}`}
                    >
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {getIndustrialWasteLicenseIssuingAuthorityName(
                        license.issuingAuthority,
                      ) || "?"}
                    </Link>
                  </p>
                  <p className="mt-1 flex text-xs leading-5 text-gray-500">
                    {getIndustrialLicenseTypeName(license.typeCode) || "?"}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-4">
                <div className="flex flex-col items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {license.licensedCategories.length}
                    {" 品目"}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {daysLeft < 0 ? (
                      <>
                        <XCircleIcon className="h-6 w-6 inline text-red-600" />{" "}
                        期限切れ
                      </>
                    ) : daysLeft <= 30 && daysLeft > 0 ? (
                      <>
                        <ExclamationTriangleIcon className="h-6 w-6 inline text-yellow-600" />{" "}
                        期限まで
                        {daysLeft}日
                      </>
                    ) : (
                      formatDate(license.expirationDate) + "まで"
                    )}
                  </p>
                </div>
                {
                  license.licenseUrl &&
                  <a
                    href={license.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block group ml-5"
                  >
                    <PaperClipIcon className="h-5 w-5 group-hover:border group-hover:border-gray-500 group-hover:rounded-md" />
                  </a>
                }
              </div>
            </li>
          );
        })}
        <li className="px-2 relative flex justify-between gap-x-6 py-3 hover:bg-gray-50">
          <Link
            href={"./" + contractorId + "/licenses/industrial-waste/register"}
            className="flex mx-auto"
          >
            <PlusButton />
          </Link>
        </li>
      </ul>
    </div>
  );
}
