import React from "react";
import { Client, Contractor, IndustrialWasteContract } from "@prisma/client";
import { formatDate } from "@/utils/dateUtils";
import { classNames } from "@/utils/classNames";

// const people = [
//   { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
// ]

type IndustrialWasteContractWithRelations = IndustrialWasteContract & { client: Client, contractor: Contractor }

export default function ContractTable({ title, contracts }: { title: string, contracts: IndustrialWasteContractWithRelations[] }) {

  return (
    <div className="px-4 sm:px-4 lg:px-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">
            {title}
          </h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    排出事業者
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    業者
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    種類
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    契約終了日
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contracts.map((contract) => (
                  <tr key={contract.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0">
                      {`${contract?.client?.isPrefixEntityType ? contract?.client.entityType : ""}${contract?.client?.name}${contract?.client?.entityType && !contract.client.isPrefixEntityType ? contract.client.entityType : ""}`}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {`${contract?.contractor?.isPrefixEntityType ? contract?.contractor.entityType : ""}${contract?.contractor?.name}${contract?.contractor?.entityType && !contract.contractor.isPrefixEntityType ? contract.contractor.entityType : ""}`}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className={contract.type === "disposal" ? "rounded-md p-1 bg-slate-500 text-white text-xs" : ""}>
                        {contract.type === "transportation" ? "収運" : "処分"}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{contract.isAutoRenew ? "自動更新" : formatDate(contract.endDate)}</td>
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
