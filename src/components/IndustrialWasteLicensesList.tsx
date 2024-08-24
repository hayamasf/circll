import React from "react";

import LinkButton from "./LinkButton";
import { getIndustrialWasteLicenses } from "@/utils/getIndustrialWasteLicenses";
import { formatDate } from "@/utils/dateUtils";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { getIndustrialLicenseTypeName } from "@/utils/getIndustrialWasteLicenseTypeName";
import { getIndustrialWasteLicenseIssuingAuthorityName } from "@/utils/getIndustrialWasteLiceseIssuingAuthorityName";

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
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="text-xs">
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left font-semibold text-gray-900 sm:pl-0"
                  >
                    許可区域
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left font-semibold text-gray-900"
                  >
                    種類
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left font-semibold text-gray-900"
                  >
                    有効期限
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left font-semibold text-gray-900"
                  >
                    写し
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {licenses.map((license) => (
                  <tr key={license.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {getIndustrialWasteLicenseIssuingAuthorityName(license.issuingAuthority) || "?"}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {getIndustrialLicenseTypeName(license.typeCode) || "?"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {formatDate(license.expirationDate)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <a
                        href={license.licenseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block group"
                      >
                        <PaperClipIcon className="h-5 w-5 group-hover:border group-hover:border-gray-500 group-hover:rounded-md" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
