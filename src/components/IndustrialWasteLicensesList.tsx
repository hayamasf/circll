import React from "react";

import Link from "next/link";
import LinkButton from "./LinkButton";
import { getIndustrialWasteLicenses } from "@/utils/getIndustrialWasteLicenses";
import { getDaysUntilExpiration } from "@/utils/dateUtils";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { formatDate } from "@/utils/dateUtils";
import getIndustrialLicenseTypeName from "@/utils/getIndustrialWasteLicenseTypeName";
import getIndustrialWasteLicenseIssuingAuthorityName from "@/utils/getIndustrialWasteLiceseIssuingAuthorityName";

export default async function IndustrialWasteLicensesList({
  contractorId,
}: {
  contractorId: number;
}) {
  const licenses = await getIndustrialWasteLicenses(contractorId);

  return (
    <div className="py-12">
      <div className="flex items-center">
        <div className="flex-auto">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">
            産業<span className="text-sm font-light">廃棄物処理業許可</span>
          </h2>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <LinkButton
            href={"./" + contractorId + "/licenses/industrial-waste/register"}
          >
            登録
          </LinkButton>
        </div>
      </div>

      <ul role="list" className="mt-7 divide-y divide-gray-100">
        {licenses.map((license) => {
          const daysLeft = getDaysUntilExpiration(license.expirationDate);

          return (
            <li
              key={license.id}
              className="relative flex justify-between gap-x-6 py-5 hover:bg-gray-50"
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
                    {license.wasteItems.length}
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
                <a
                  href={license.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block group ml-5"
                >
                  <PaperClipIcon className="h-5 w-5 group-hover:border group-hover:border-gray-500 group-hover:rounded-md" />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
