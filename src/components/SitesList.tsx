// "use client";

import React from "react";

import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Pagination from "./Pagination";

async function getSites() {
  const sites = await prisma.site.findMany();
  return sites;
}

export default async function SitesList() {
  const sites = await getSites()
  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {sites.map((site) => (
          <li key={site.id} className="relative py-5 hover:bg-gray-50">
            <div className="px-2 sm:px-4 lg:px-6">
              <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      <Link
                        href={"/clients/" + site.clientId + "/sites/" + site.id}
                      >
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {site.name}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="flex flex-col items-end">
                    {/* <div className="hidden sm:flex sm:flex-col sm:items-end"> */}
                    <p className="text-sm leading-6 text-gray-900">
                      {site.prefecture}
                      {site.city}
                      <span className="hidden sm:inline">
                        {site.town}
                        {site.address}
                      </span>
                    </p>
                    {site.address2 && (
                      <p className="hidden text-sm leading-6 text-gray-900 sm:block">
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
      <Pagination />
    </>
  );
}
