import React from "react";

import getMswLicenses from "@/utils/getMswLicenses";
import { formatDate } from "@/utils/dateUtils";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { getDaysUntilExpiration } from "@/utils/dateUtils";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import EllipsisDropDownMenu from "./EllipsisDropDownMenu";

export default async function MswLicensesList({
  contractorId,
}: {
  contractorId: number;
}) {
  const licenses = await getMswLicenses(contractorId);

  if (licenses.length === 0) {
    return (
      <div className="text-sm text-center">
        <Link
          href={"./" + contractorId + "/licenses/msw/register"}
          className="font-bold hover:underline"
        >
          登録
        </Link>
        する.
      </div>
    );
  }


  return (
    <div className="grid gap-y-2">
      <div className="text-right">
        <Link
          href={"./" + contractorId + "/licenses/msw/register"}
          className="text-xs font-semibold p-1 border border-gray-500 rounded-md hover:bg-gray-200"
        >
          登録する
        </Link>
      </div>

      <ul role="list" className="divide-y divide-gray-100">
        {licenses.map((license) => {
          const daysLeft = getDaysUntilExpiration(license.expirationDate);

          const menuItems = [
            { id: 1, text: "編集する", href: "/contractors/" + license.contractorId + "/licenses/msw/" + license.id + "/edit" }
          ]

          return (
            <li
              key={license.id}
              className="relative flex justify-between gap-x-6 py-3"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {license.municipality.name}
                  </p>
                  <p className="mt-1 flex text-xs leading-5 text-gray-500">
                    {license.type === 1 && (
                      <span className="text-xs p-1">収集運搬</span>
                    )}
                    {license.type === 2 && (
                      <span className="text-xs p-1 rounded-md border border-gray-800">
                        処分
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-4">
                <div className="flex flex-col items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {daysLeft <= 30 && daysLeft > 0 && (
                      <>
                        <ExclamationCircleIcon className="h-6 w-6 inline text-yellow-500" />{" "}
                        {daysLeft}日
                      </>
                    )}
                    {daysLeft < 0 && (
                      <>
                        <XCircleIcon className="h-6 w-6 inline text-red-600" />{" "}
                        期限切れ
                      </>
                    )}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {daysLeft < 0
                      ? ""
                      : formatDate(license.expirationDate) + "まで"}
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
                <EllipsisDropDownMenu menuItems={menuItems} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
