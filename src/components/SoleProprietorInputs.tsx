"use client";

import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { LegalEntityFormData } from "@/types/types";

export default function SoleProprietorInputs() {
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext<LegalEntityFormData>();

  useEffect(() => {
    unregister("entityType");
    unregister("isPrefixEntityType");
    unregister("title");
    unregister("representative");
  }, []);

  return (
    <div className="pb-10 border-b border-gray-900/10">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            氏名
          </label>
          <div className="mt-2">
            <input
              id="name"
              {...register("name", {
                required: "氏名は必須です",
                pattern: {
                  value: /^[^\s　]+[ 　]+[^\s　]+$/,
                  message: "苗字と名前の間にスペースを入れてください.",
                },
              })}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="与島 大五郎"
            />
          </div>
          {errors.name?.message && (
            <p className="text-xs text-red-500 p-1">{errors.name?.message}</p>
          )}
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="tradeName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            屋号 (オプショナル)
          </label>
          <div className="mt-2">
            <input
              id="tradeName"
              {...register("tradeName")}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="与島商店"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
