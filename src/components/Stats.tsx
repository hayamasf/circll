import React from "react";

import ClientCounterCard from "./ClientCounterCard";
import ContractorCounterCard from "./ContractorCounterCard";

const stats = [
  { name: "Total Subscribers", stat: "71,897" },
  { name: "Avg. Open Rate", stat: "58.16%" },
];

export default function Stats() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
        <ClientCounterCard />
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-center text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
        <ContractorCounterCard />
      </dl>
    </div>
  );
}
