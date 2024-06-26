import React from "react";
import { formatPostalCode } from "@/utils/formatPostalCode";
import { LegalEntity } from "@/types/types";
import EllipsisDropDownMenu from "./EllipsisDropDownMenu";

export default function LegalEntityProfile({
  entity,
}: {
  entity: LegalEntity;
}) {
  const menuItems = [
    { id: 1, text: "情報を更新する", href: "./" + entity.id + "/edit" },
  ];

  return (
    <div className="container my-10 mx-auto max-w-3xl">
      <div className="px-4 sm:px-0">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            {entity.isPrefixEntityType && entity.entityType}
            {entity.name}
            {entity.entityType &&
              !entity.isPrefixEntityType &&
              entity.entityType}
          </h3>
          <EllipsisDropDownMenu menuItems={menuItems} />
        </div>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {entity.entityType && entity.title + " " + entity.representative}
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
      </div>
      {/* <div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex border-t border-gray-100 px-4 py-6 text-xs sm:col-span-1 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">登録</dt>
            <dd className="ml-3 leading-6 text-gray-700">
              {formatDateTime(entity.createdAt)}
            </dd>
          </div>
          <div className="flex text-xs border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">更新</dt>
            <dd className="ml-3 leading-6 text-gray-700">
              {entity.updatedAt.toLocaleString("ja-JP")}
            </dd>
          </div>
        </dl>
      </div> */}
    </div>
  );
}
