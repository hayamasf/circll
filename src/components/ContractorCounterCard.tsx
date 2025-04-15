import React from "react";
import getTotalContractorsCount from "@/utils/getTotalContractorsCount";

export default async function ContractorCounterCard() {
  const count = await getTotalContractorsCount();

  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
      <dt className="truncate text-sm font-medium text-gray-500">{"業者"}</dt>
      <dd className="mt-1 text-center text-3xl font-semibold tracking-tight text-gray-900">
        {count !== null ? count : "Loading..."}
      </dd>
    </div>
  );
}
