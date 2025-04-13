import React from "react";
import Card from "./Card";
import { Client, Contractor, IndustrialWasteContract } from "@prisma/client";
import EllipsisDropDownMenu from "./EllipsisDropDownMenu";
import { formatEntityName } from "@/utils/formatEntityName";
import { formatDate } from "@/utils/dateUtils";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default async function IndustrialWasteContractDetail({
  contract,
}: {
  contract: IndustrialWasteContract & {
    client: Client;
    contractor: Contractor;
  };
}) {
  const menuItems = [
    { id: 1, text: "更新する", href: "./" + contract.id + "/edit" },
  ];

  return (
    <Card>
      <div className="mt-2 grid gap-y-2">
        <div className="mb-7 flex items-center justify-between">
          <h3 className="font-semibold">
            産業廃棄物処理委託（
            {contract.type === "transportation" && "収集運搬"}
            {contract.type === "disposal" && "処分"}）
          </h3>
          <EllipsisDropDownMenu menuItems={menuItems} />
        </div>
        <div className="text-sm grid gap-y-2">
          <p>{formatEntityName(contract.client)}</p>
          <p>{formatEntityName(contract.contractor)}</p>
          <p className="flex">
            {formatDate(contract.endDate)}
            {contract.isAutoRenew ? (
              <span className="flex items-center">
                <ArrowPathIcon className="h-5 w-5 ml-3 mr-1 text-gray-500" />
                自動更新
              </span>
            ) : (
              " まで"
            )}
          </p>
        </div>
      </div>
    </Card>
  );
}
