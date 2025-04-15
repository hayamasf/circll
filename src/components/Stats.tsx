import React from "react";

import ClientCounterCard from "./ClientCounterCard";
import SiteCounterCard from "./SiteCounterCard";
import ContractorCounterCard from "./ContractorCounterCard";

const stats = [{ name: "Total Subscribers", stat: "71,897" }];

export default function Stats() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
        <ClientCounterCard />
        <SiteCounterCard />
        <ContractorCounterCard />
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-center text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
