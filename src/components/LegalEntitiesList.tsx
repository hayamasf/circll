import React from "react";

import Link from "next/link";
import Pagination from "./Pagination";
import { LegalEntity } from "@/types/types";

export default function LegalEntitiesList({
  entities,
  path,
}: {
  entities: LegalEntity[];
  path: string;
}) {
  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {entities.map((entity) => (
          <li key={entity.id} className="relative py-5 hover:bg-gray-50">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      <Link href={path + "/" + entity.id}>
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {entity.isPrefixEntityType && entity.entityType}
                        {entity.name}
                        {entity.entityType &&
                          !entity.isPrefixEntityType &&
                          entity.entityType}
                      </Link>
                    </p>
                    <p className="mt-1 flex text-xs leading-5 text-gray-500">
                      {entity.entityType &&
                        entity.title + " " + entity.representative}
                      {entity.tradeName && entity.tradeName}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="flex flex-col items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {entity.prefecture}
                      {entity.city}
                      <span className="hidden sm:inline">
                        {entity.town}
                        {entity.address}
                      </span>
                    </p>
                    {entity.address2 && (
                      <p className="text-sm leading-6 text-gray-900">
                        {entity.address2}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination currentPage={1} limit={4} totalPages={1} />
    </>
  );
}
