import React from "react";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import getIndustrialWasteContracts from "@/utils/getIndustrialWasteContracts";
import { formatDate } from "@/utils/dateUtils";
import { formatEntityName } from "@/utils/formatEntityName";

export default async function IndustrialWasteContractsList() {
  const contracts = await getIndustrialWasteContracts();
  return (
    <div className="px-4 sm:px-4 lg:px-6">
      <ul role="list" className="mt-6 divide-y divide-gray-100">
        {contracts.map((contract) => (
          <li
            key={contract.id}
            className="relative flex justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 text-gray-900">
                  <a href={"/contracts/" + contract.id}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {formatEntityName(contract.client)}
                  </a>
                </p>
                <p className="mt-1 flex text-sm/6 text-gray-900">
                  {formatEntityName(contract.contractor)}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm/6 text-gray-900">
                  {contract.type === "transportation" ? "収集運搬" : "処分"}
                </p>
                {contract.isAutoRenew ? (
                  <p className="mt-1 text-xs/5 text-gray-500">自動更新</p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <p className="text-xs/5 text-gray-500">
                      {formatDate(contract.endDate) + "まで"}
                    </p>
                  </div>
                )}
              </div>
              <ChevronRightIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
