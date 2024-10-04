"use client";

import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { LegalEntityFormData } from "@/types/types";

export default function CorporateEntityInputs() {
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext<LegalEntityFormData>();

  useEffect(() => {
    unregister("tradeName");
  }, []);

  return (
    <div className="pb-10 space-y-10 border-b border-gray-900/10">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="entityType"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            法人の種類
          </label>
          <div className="mt-2">
            <select
              id="entityType"
              {...register("entityType")}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option value="株式会社">株式会社</option>
              <option value="有限会社">有限会社</option>
              <option value="合同会社">合同会社</option>
              <option value="合名会社">合名会社</option>
              <option value="合資会社">合資会社</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="isPrefixEntityType"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            法人格は名称の
          </label>
          <div className="mt-2">
            <select
              id="isPrefixEntityType"
              {...register("isPrefixEntityType")}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option value="true">前</option>
              <option value="false">後ろ</option>
            </select>
          </div>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          名称（法人格は入力しない）
        </label>
        <div className="mt-2">
          <input
            id="name"
            {...register("name", { required: "名称は必須です" })}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="サティスファクトリー"
          />
        </div>
        {errors.name?.message && (
          <p className="text-xs text-red-500 p-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="representativeTitle"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            代表者の役職名
          </label>
          <div className="mt-2">
            <input
              id="representativeTitle"
              {...register("representativeTitle", {
                required: "代表者の役職名は必須です",
              })}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="代表取締役"
            />
          </div>
          {errors.representativeTitle?.message && (
            <p className="text-xs text-red-500 p-1">
              {errors.representativeTitle?.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="representativeName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            代表者の氏名
          </label>
          <div className="mt-2">
            <input
              id="representativeName"
              {...register("representativeName", {
                required: "代表者の氏名は必須です",
                pattern: {
                  value: /^[^\s　]+[ 　]{1}[^\s　]+$/,
                  message: "苗字と名前の間にスペースを入れてください.",
                },
              })}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="小松 武司"
            />
          </div>
          {errors.representativeName?.message && (
            <p className="text-xs text-red-500 p-1">
              {String(errors.representativeName?.message)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
