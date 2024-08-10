import React from "react";
import { useFormContext } from "react-hook-form";
import { RadioOption } from "@/types/types";

export default function RadioGroup({
  legendTitle,
  groupName,
  options,
  defaultValue,
}: {
  legendTitle: string;
  groupName: string;
  options: RadioOption[];
  defaultValue: string;
}) {
  const { register } = useFormContext();

  return (
    <fieldset className="relative">
      <legend className="absolute text-xs font-medium left-3.5 -top-2 leading-6 text-gray-900">
        {legendTitle}
      </legend>
      <div className="mt-4 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {options.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              id={option.id}
              {...register(groupName)}
              defaultChecked={option.id === defaultValue}
              value={option.id}
              type="radio"
              className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-600"
            />
            <label
              htmlFor={option.id}
              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >
              {option.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
