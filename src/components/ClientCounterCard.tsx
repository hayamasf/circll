import React from "react";
import getTotalClientsCount from "@/utils/getTotalClientsCount";

export default async function ClientCounterCard() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const count = await getTotalClientsCount();

  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
      <dt className="truncate text-sm font-medium text-gray-500">
        {"排出事業者"}
      </dt>
      <dd className="mt-1 text-center text-3xl font-semibold tracking-tight text-gray-900">
        {count !== null ? count : "Loading..."}
      </dd>
    </div>
  );
}
