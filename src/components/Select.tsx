import React from "react";

import { useFormContext, RegisterOptions } from "react-hook-form";

export default function Select({
  id,
  label,
  name,
  options,
  validation,
}: {
  id: string;
  label: string;
  name: string;
  options: { value: string | boolean; label: string }[];
  validation?: RegisterOptions;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          id="entityType"
          {...register(name, validation)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map((option) => (
            <option key={String(option.value)} value={String(option.value)}>
              {String(option.label)}
            </option>
          ))}
        </select>
      </div>
      {errors[name]?.message && (
        <p className="text-xs text-red-500 p-1">
          {errors[name].message as string}
        </p>
      )}
    </>
  );
}
