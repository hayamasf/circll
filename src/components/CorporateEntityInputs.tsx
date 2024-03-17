"use client";

import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Client } from "@/types/types";
import { ContractParty } from "@/types/types";

export default function CorporateEntityInputs({
  register,
  errors,
}: {
  register: UseFormRegister<ContractParty>;
  errors: FieldErrors<ContractParty>;
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-1">
        <div className="relative">
          <label
            htmlFor="entityType"
            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            法人の種類
          </label>
          <select
            id="entityType"
            {...register("entityType")}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
          >
            <option value="株式会社">株式会社</option>
            <option value="有限会社">有限会社</option>
            <option value="合同会社">合同会社</option>
            <option value="合名会社">合名会社</option>
            <option value="合資会社">合資会社</option>
          </select>
        </div>
        <div className="relative">
          <label
            htmlFor="isPrefixEntityType"
            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            法人格は名称の
          </label>
          <select
            id="entityType"
            {...register("isPrefixEntityType")}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
          >
            <option value="true">前</option>
            <option value="false">後ろ</option>
          </select>
        </div>

      </div>
      <div className="relative">
        <label
          htmlFor="name"
          className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          名称（法人格は入力しない）
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "業者名は必須です" })}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
          placeholder="サティスファクトリー"
        />
        {errors.name?.message && (
          <p className="text-xs text-red-500 p-1">{errors.name?.message}</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-x-1">
        <div className="relative">
          <label
            htmlFor="title"
            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            代表者役職名
          </label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "代表者役職名は必須です",
            })}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
            placeholder="代表取締役"
          />
          {errors.title?.message && (
            <p className="text-xs text-red-500 p-1">{errors.title?.message}</p>
          )}
        </div>

        <div className="relative">
          <label
            htmlFor="representative"
            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            代表者氏名
          </label>
          <input
            type="text"
            id="representative"
            {...register("representative", {
              required: "代表者氏名は必須です",
            })}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
            placeholder="小松武司"
          />
          {errors.representative?.message && (
            <p className="text-xs text-red-500 p-1">
              {errors.representative?.message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
