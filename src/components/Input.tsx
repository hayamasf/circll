import React from "react";
import { useFormContext } from "react-hook-form";

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
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
        type={type}
        id={name}
        {...register(name)}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
