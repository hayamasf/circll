import React from "react";
import { useFormContext } from "react-hook-form";
import { Site } from "@/types/types";

export default function SiteInputs() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Site>();

  return (
    <div className="relative">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        事業所名
      </label>
      <input
        type="text"
        id="name"
        {...register("name", { required: "事業所名は必須です" })}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
        placeholder="東京中央営業所"
      />
      {errors.name?.message && (
        <p className="text-xs text-red-500 p-1">{errors.name?.message}</p>
      )}
    </div>
  );
}
