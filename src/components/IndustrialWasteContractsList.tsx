import React from "react";

import getIndustrialWasteContracts from "@/utils/getIndustrialWasteContracts";
import { formatEntityName } from "@/utils/formatEntityName";
import { TruckIcon } from "@heroicons/react/24/outline";
import FactoryIcon from "@/app/icons/FactoryIcon";
import Link from "next/link";

export default async function IndustrialWasteContractsList() {
  const contracts = await getIndustrialWasteContracts();
  return (
    <>
      <ul role="list" className="mt-6 divide-y divide-gray-100">
        {contracts.map((contract) => (
          <li key={contract.id} className="relative py-5 hover:bg-gray-50">
            <div className="px-3 sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm leading-6 text-gray-900">
                      <Link href={"/contracts/industrial-waste/" + contract.id}>
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {formatEntityName(contract.client)}
                      </Link>
                    </p>
                    <p className="mt-1 text-sm leading-6 text-gray-900">
                      {formatEntityName(contract.contractor)}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="flex flex-col items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {contract.type === "transportation" && "収集運搬"}
                      {contract.type === "treatment" && "処分"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
