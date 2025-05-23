import React from "react";
import { useFormContext } from "react-hook-form";

export default function DateInput({
  name,
  label,
  min,
  required,
}: {
  name: string;
  label: string;
  min?: string;
  required?: boolean;
}) {
  const { register } = useFormContext();

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="date"
        id={name}
        {...register(name)}
        min={min}
        required={required}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
      />
    </div>
  );
}
