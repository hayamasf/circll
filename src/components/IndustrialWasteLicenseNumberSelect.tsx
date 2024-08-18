import React from "react";
import { useFormContext } from "react-hook-form";
import { numbers0to9 } from "@/data/constants";
import { authorities } from "@/data/constants";

export default function IndustrialWasteLicenseNumberSelect() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <fieldset className="relative">
        <legend className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
          許可番号 ※11桁（東京都は10桁）の数字
        </legend>
        <div className="flex border-0 px-1 py-1 ring-1 ring-inset ring-gray-300 rounded-md">
          <div className="">
            <label htmlFor="issuingAuthority" className="sr-only">
              都道府県/政令市番号
            </label>
            <select
              id="issuingAuthority"
              {...register("issuingAuthority", { required: true })}
              required
              className={`w-fit border-0 border-b text-gray-900 focus:ring-0 sm:text-sm`}
            >
              <option value="" disabled>
                ---
              </option>
              {authorities.map((authority) => (
                <option key={authority.id} value={authority.id}>
                  {authority.code}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label htmlFor="typeCode" className="sr-only">
              業の種類
            </label>
            <select
              id="typeCode"
              {...register("typeCode", { required: true })}
              required
              className={`w-fit border-0 border-b text-gray-900 focus:ring-0 sm:text-sm`}
            >
              <option value="" disabled>
                -
              </option>
              {numbers0to9.map((number) => (
                <option key={number.id} value={number.id}>
                  {number.id}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label htmlFor="authorityCode" className="sr-only">
              都道府県/政令市が自由に使用できる番号
            </label>
            <select
              id="authorityCode"
              {...register("authorityCode", { required: true })}
              required
              className={`w-fit border-0 border-b text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm`}
            >
              <option value="" disabled>
                -
              </option>
              {numbers0to9.map((number) => (
                <option key={number.id} value={number.id}>
                  {number.id}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label htmlFor={"contractorCode"} className="sr-only">
              業者の固有番号
            </label>
            <input
              type="text"
              id={""}
              className={`w-full border-0 border-b text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm`}
              placeholder={"6桁の数字"}
              minLength={6}
              maxLength={6}
              inputMode="numeric"
              {...register("contractorCode", {
                required: "業者の固有番号は必須です.",
              })}
              required
            />
          </div>
        </div>
      </fieldset>
    </>
  );
}
