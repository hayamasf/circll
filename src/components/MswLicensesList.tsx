import React from "react";

import LinkButton from "./LinkButton";
import getMswLicenses from "@/utils/getMswLicenses";
import { formatDate } from "@/utils/dateUtils";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { getDaysUntilExpiration } from "@/utils/dateUtils";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";

export default async function MswLicensesList({
  contractorId,
}: {
  contractorId: number;
}) {
  const licenses = await getMswLicenses(contractorId);

  return (
    <div className="py-5">
      <div className="flex items-center">
        <div className="flex-auto">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">
            一般<span className="text-sm font-light">廃棄物処理業許可</span>
          </h2>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <LinkButton href={"./" + contractorId + "/licenses/msw/register"}>
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
              className="relative flex justify-between gap-x-6 py-5"
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
              </div>
            </li>
          );
        })}
      </ul>
      {/* <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <tbody className="divide-y divide-gray-200">
                {licenses.map((license) => (
                  <tr key={license.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {license.type === 1 && (
                        <span className="text-xs p-1 rounded-md border border-gray-800">
                          収集運搬
                        </span>
                      )}
                      {license.type === 2 && (
                        <span className="text-xs text-white p-1 rounded-md bg-gray-800">
                          処分
                        </span>
                      )}
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

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href={`./${license.contractorId}/licenses/msw/${license.id}/edit`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        編集<span className="sr-only">, {license.id}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
}
