import React from "react";

import Link from "next/link";
import { Site } from "@/types/types";

export default async function SitesList({ sites }: { sites: Site[] }) {

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {sites.map((site) => (
        <li key={site.id} className="relative py-5 hover:bg-gray-50">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    <Link href={"/clients/" + site.clientId + "/sites/" + site.id}>
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {site.name}
                    </Link>
                  </p>
                  {/* <p className="mt-1 flex text-xs leading-5 text-gray-500">
                    {entity.entityType &&
                      entity.title + " " + entity.representative}
                    {entity.tradeName && entity.tradeName}
                  </p> */}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-4">
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {site.prefecture}
                    {site.city}
                    {site.town}
                    {site.address}
                  </p>
                  {site.address2 && (
                    <p className="text-sm leading-6 text-gray-900">
                      {site.address2}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

        </li>
      ))}
    </ul>
  )


}