import React from "react";

import LinkButton from "./LinkButton";
import getMswLicenses from "@/utils/getMswLicenses";
import { formatDate } from "@/utils/dateUtils";

export default async function MswLicensesList({ contractorId }: { contractorId: number }) {
  const licenses = await getMswLicenses(contractorId)

  return (
    <div className="py-5">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h3 className="text-base font-semibold leading-6 text-gray-900">一般廃棄物</h3>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <LinkButton href={"./" + contractorId + "/licenses/msw/register"}>登録</LinkButton>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    許可自治体
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    種類
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    有効期限
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {licenses.map((license) => (
                  <tr key={license.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {license.prefectureId}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {license.type === 1 ? <span className="text-xs p-1 rounded-md border border-gray-800">収集運搬</span> : "処分"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formatDate(license.expirationDate)}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        編集<span className="sr-only">, {license.id}</span>
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
  )
}
