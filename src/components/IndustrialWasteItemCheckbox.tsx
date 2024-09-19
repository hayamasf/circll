import React from "react";
import { useFormContext } from "react-hook-form";
import { WasteItem } from "@prisma/client";

export default function IndustrialWasteItemCheckbox({
  wasteItems,
}: {
  wasteItems: WasteItem[];
}) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  if (wasteItems) {
    return (
      <fieldset>
        <legend className="text-base font-semibold leading-6 text-gray-900">
          産業廃棄物の品目
        </legend>
        {errors.wasteItems?.message && (
          <p className="my-2 text-sm text-red-600">
            {String(errors.wasteItems.message)}
          </p>
        )}

        <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
          {wasteItems.map((wasteItem) => (
            <div
              key={wasteItem.id}
              className="relative flex items-start py-4 gap-x-4"
            >
              <div className="flex h-6 items-center">
                <input
                  id={String(wasteItem.id)}
                  type="checkbox"
                  {...register("wasteItems", {
                    validate: (value) =>
                      (Array.isArray(value) && value.length > 0) ||
                      "許可品目を選択してください.",
                  })}
                  value={wasteItem.id}
                  className="h-4 w-4 rounded border-gray-300 focus:ring-0 checked:text-gray-800"
                />
              </div>

              {/* ---- */}
              <div className="min-w-0 flex-1 text-sm leading-6">
                <label
                  htmlFor={String(wasteItem.id)}
                  className="select-none font-medium text-gray-900"
                >
                  {wasteItem.name}
                </label>
              </div>
              {/* ---- */}
            </div>
          ))}
        </div>
      </fieldset>
    );
  } else {
    console.log("産業廃棄物の品目が取得できませんでした.");
    return null;
  }
}
