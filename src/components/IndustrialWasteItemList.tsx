import React from "react";
import { wasteItems } from "@/data/constants";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function IndustrialWasteItemList() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {wasteItems.map((item) => (
        <li key={item.id} className="flex gap-x-4 py-3">
          <p>
            <CheckCircleIcon className="h-6 w-6" />
          </p>
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {item.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
