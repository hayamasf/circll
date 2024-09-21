import React from "react";

import Link from "next/link";
import Pagination from "./Pagination";
import getClients from "@/utils/getClients";
import getTotalClientsCount from "@/utils/getTotalClientsCount";

export default async function ClientsList({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}) {
  const clients = await getClients(offset, limit);
  const totalClients = await getTotalClientsCount();
  const totalPages = Math.ceil(totalClients / limit);

  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {clients.map((client) => (
          <li key={client.id} className="relative py-5 hover:bg-gray-50">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      <Link href={"clients/" + client.id}>
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {client.isPrefixEntityType && client.entityType}
                        {client.name}
                        {client.entityType &&
                          !client.isPrefixEntityType &&
                          client.entityType}
                      </Link>
                    </p>
                    <p className="mt-1 flex text-xs leading-5 text-gray-500">
                      {client.entityType &&
                        client.representativeTitle + " " + client.representativeName}
                      {client.tradeName && client.tradeName}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="flex flex-col items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {client.prefecture}
                      {client.city}
                      <span className="hidden sm:inline">
                        {client.town}
                        {client.address}
                      </span>
                    </p>
                    {client.address2 && (
                      <p className="text-sm leading-6 text-gray-900">
                        {client.address2}
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
