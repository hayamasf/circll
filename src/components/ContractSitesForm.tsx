import React from "react";
import { Site } from "@prisma/client";
import Card from "./Card";

export default async function ContractSitesForm({ sites }: { sites: Site[] }) {
  return (
    <Card>
      <div className="mb-7 flex items-center justify-between">
        <h4 className="font-semibold">
          対象の事業所
        </h4>
      </div>
      <fieldset>
        <legend className="sr-only">契約対象の事業所</legend>
        <div className="space-y-5 text-sm">
          {sites.map((site) => (
            <div key={site.id} className="flex items-center gap-3">
              <input
                type="checkbox"
                id={String(site.id)}
                value={site.id}
                className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-1"
              />
              <div className="text-sm leading-6">
                <label htmlFor={String(site.id)} className="font-medium text-gray-800">
                  {site.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </Card>
  )
}
