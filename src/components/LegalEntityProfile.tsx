import React from "react";
import { formatPostalCode } from "@/utils/formatPostalCode";
import { Client, Contractor } from "@prisma/client";
import Card from "./Card";
import EllipsisDropDownMenu from "./EllipsisDropDownMenu";

export default function LegalEntityProfile({
  entity,
}: {
  entity: Client | Contractor;
}) {
  const menuItems = [
    { id: 1, text: "情報を更新する", href: "./" + entity.id + "/edit" },
  ];

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          {entity.isPrefixEntityType && entity.entityType}
          {entity.name}
          {entity.entityType && !entity.isPrefixEntityType && entity.entityType}
        </h3>
        <EllipsisDropDownMenu menuItems={menuItems} />
      </div>
      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        {entity.entityType &&
          entity.representativeTitle + " " + entity.representativeName}
        {entity.tradeName && entity.tradeName}
      </p>
      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        {formatPostalCode(entity.postalCode)}
      </p>
      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        {entity.prefecture}
        {entity.city}
        {entity.town}
        {entity.address}
      </p>
      {entity.address2 && (
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {entity.address2}
        </p>
      )}
    </Card>
  );
}
