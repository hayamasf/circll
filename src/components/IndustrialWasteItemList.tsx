import React from "react";
import { wasteItems } from "@/data/constants";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function IndustrialWasteItemList({
  licensedItems,
}: {
  licensedItems: { id: number; name: string }[];
}) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {wasteItems.map((item) => {
        const isIncluded = licensedItems.some(
          (wasteItems) => wasteItems.id === item.id,
        );
        return (
          <li key={item.id} className="flex gap-x-4 py-5">
            <p className="h-6 w-6">
              {isIncluded && <CheckCircleIcon className="h-6 w-6" />}
            </p>
            <p
              className={`text-sm leading-6 ${isIncluded ? "text-gray-900" : "text-gray-400"}`}
            >
              {item.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
