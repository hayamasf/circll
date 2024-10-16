import React from "react";
import { formatPostalCode } from "@/utils/formatPostalCode";
import { Site } from "@/types/types";
import EllipsisDropDownMenu from "./EllipsisDropDownMenu";

export default function SiteDetail({ site }: { site: Site }) {
  const menuItems = [
    { id: 1, text: "情報を更新する", href: "./" + site.id + "/edit" },
  ];

  return (
    <div className="flex space-x-3">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-gray-900">{site.name}</p>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {formatPostalCode(site.postalCode)}
        </p>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {site.prefecture}
          {site.city}
          {site.town}
          {site.address}
        </p>
        {site.address2 && (
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {site.address2}
          </p>
        )}
      </div>
      <EllipsisDropDownMenu menuItems={menuItems} />
    </div>
  );
}
