import React from "react";
import Link from "next/link";
import getContractsByClientId from "@/utils/getContractsByClientId";
import { formatEntityName } from "@/utils/formatEntityName";

export default async function ContractsByClient({ clientId }: { clientId: number }) {
  const contracts = await getContractsByClientId(clientId)

  return (
    <div>
      {contracts.length === 0 ? (
        <p>契約が登録されていません.</p>
      )
        :
        (
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
                            {formatEntityName(contract.contractor)}
                          </Link>
                        </p>
                        {/* <p className="mt-1 text-sm leading-6 text-gray-900">
                          {formatEntityName(contract.contractor)}
                        </p> */}
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-x-4">
                      <div className="flex flex-col items-end">
                        <p className="text-sm leading-6 text-gray-900">
                          {contract.contractType === "transportation" && "収集運搬"}
                          {contract.contractType === "treatment" && "処分"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}
