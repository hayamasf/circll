import React from "react";

import { prisma } from "@/lib/prisma";

export default async function ContractorCounterCard() {
  const count = await prisma.contractor.count();

  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt className="truncate text-sm font-medium text-gray-500">{"業者"}</dt>
      <dd className="mt-1 text-center text-3xl font-semibold tracking-tight text-gray-900">
        {count !== null ? count : "Loading..."}
      </dd>
    </div>
  );
}
