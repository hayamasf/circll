import React from "react";
import getIndustrialWasteCategories from "@/utils/getIndustrialWasteCategories";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default async function IndustrialWasteCategoryList({
  licensedCategories,
}: {
  licensedCategories: { id: number; name: string }[];
}) {
  const industrialWasteCategories = await getIndustrialWasteCategories();

  if (!industrialWasteCategories) {
    return <div>産業廃棄物の種類一覧を取得できませんでした.</div>

  }

  return (
    <ul role="list" className="divide-y divide-gray-100">

      {industrialWasteCategories.map((category) => {
        const isIncluded = licensedCategories.some(
          (wasteItems) => wasteItems.id === category.id,
        );
        return (
          <li key={category.id} className="flex gap-x-4 py-5">
            <p className="h-6 w-6">
              {isIncluded && <CheckCircleIcon className="h-6 w-6" />}
            </p>
            <p
              className={`text-sm leading-6 ${isIncluded ? "text-gray-900" : "text-gray-400"}`}
            >
              {category.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
