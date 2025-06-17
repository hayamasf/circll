import React from "react";
import { Site } from "@prisma/client";
import Card from "./Card";

export default async function ContractSitesForm({ sites }: { sites: Site[] }) {
  return (
    <Card>
      <div className="mt-2 grid gap-y-2">
        <div className="mb-7 flex items-center justify-between">
          <h4 className="font-semibold">
            対象の事業所
          </h4>
        </div>
        <div className="text-sm grid gap-y-2">
          {sites.map((site) => (
            <div key={site.id} className="relative flex items-start py-4 gap-x-4">
              <div className="flex h-6 items-center">
                <input type="checkbox" id={String(site.id)} value={site.id} className="h-4 w-4 rounded border-gray-300 focus:ring-0 checked:text-gray-800" />
              </div>
              <label htmlFor={String(site.id)} className="select-none font-medium text-gray-900"
              >{site.name}</label>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
