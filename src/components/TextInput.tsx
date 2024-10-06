import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

export default function TextInput({
  id,
  label,
  name,
  placeholder,
  validation,
}: {
  id: string;
  label: string;
  name: string;
  placeholder: string;
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
        <input
          id={id}
          type="text"
          {...register(name, validation)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
      {errors[name]?.message && (
        <p className="text-xs text-red-500 p-1">
          {errors[name]?.message as string}
        </p>
      )}
    </>
    //     <div className="relative">
    //       <label
    //         htmlFor={name}
    //         className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
    //       >
    //         {label}
    //       </label>
    //       <input
    //         type="text"
    //         id={name}
    //         {...register(name)}
    //         className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
    //         placeholder={placeholder}
    //         required={required}
    //       />
    //     </div>
  );
}
