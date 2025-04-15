import React from "react";
import { useFormContext } from "react-hook-form";
import { Site } from "@/types/types";

export default function SiteInputs() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Site>();

  return (
    <div className="pb-10 border-b border-gray-900/10">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8">
        <div className="sm:col-span-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            事業所名
          </label>
          <div className="mt-2">
            <input
              id="name"
              type="text"
              {...register("name", { required: "事業所名は必須です" })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="奄美大島支店"
            />
          </div>
          {errors.name?.message && (
            <p className="text-xs text-red-500 p-1">{errors.name?.message}</p>
          )}
        </div>
      </div>
    </div>

    // <div className="relative">
    //   <label
    //     htmlFor="name"
    //     className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
    //   >
    //     事業所名
    //   </label>
    //   <input
    //     type="text"
    //     id="name"
    //     {...register("name", { required: "事業所名は必須です" })}
    //     className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
    //     placeholder="東京中央営業所"
    //   />
    //   {errors.name?.message && (
    //     <p className="text-xs text-red-500 p-1">{errors.name?.message}</p>
    //   )}
    // </div>
  );
}
