import React from "react";

import Link from "next/link";
import Pagination from "./Pagination";
import getContractors from "@/utils/getContractors";
import getTotalContractorsCount from "@/utils/getTotalContractorsCount";

export default async function ContractorsList({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}) {
  const contractors = await getContractors(offset, limit);
  const totalContractors = await getTotalContractorsCount();
  const totalPages = Math.ceil(totalContractors / limit);

  if (contractors.length === 0) {
    return <div className="text-center">業者の登録がありません.</div>;
  }

  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {contractors.map((contractor) => (
          <li key={contractor.id} className="relative py-5 hover:bg-gray-50">
            <div className="sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      <Link href={"contractors/" + contractor.id}>
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {contractor.isPrefixEntityType && contractor.entityType}
                        {contractor.name}
                        {contractor.entityType &&
                          !contractor.isPrefixEntityType &&
                          contractor.entityType}
                      </Link>
                    </p>
                    <p className="mt-1 flex text-xs leading-5 text-gray-500">
                      {contractor.entityType &&
                        contractor.representativeTitle +
                          " " +
                          contractor.representativeName}
                      {contractor.tradeName && contractor.tradeName}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="flex flex-col items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {contractor.prefecture}
                      {contractor.city}
                      <span className="hidden sm:inline">
                        {contractor.town}
                        {contractor.address}
                      </span>
                    </p>
                    {contractor.address2 && (
                      <p className="text-sm leading-6 text-gray-900">
                        {contractor.address2}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination currentPage={offset} limit={limit} totalPages={totalPages} />
    </>
  );
}
