import React from "react";
import { useFormContext } from "react-hook-form";

const authorities = [
  { id: "001", code: "001" },
  { id: "002", code: "002" },
  { id: "003", code: "003" },
  { id: "004", code: "004" },
  { id: "013", code: "13" },
];

const numbers = [
  { id: "0" },
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
  { id: "9" },
];

export default function IndustrialWasteLicenseNumberSelect() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="flex">
        <p className="text-sm text-gray-800">許可番号</p>

        <div className="">
          <label htmlFor="issuingAuthorityCode" className="sr-only">
            都道府県/政令市番号
          </label>
          <select
            id="issuingAuthorityCode"
            {...register("issuingAuthorityCode", { required: true })}
            required
            className={`block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
          >
            <option value="" disabled>
              -
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
            className={`block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
          >
            <option value="" disabled>
              -
            </option>
            {numbers.map((number) => (
              <option key={number.id} value={number.id}>
                {number.id}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label htmlFor="authorityNumber" className="sr-only">
            都道府県/政令市が自由に使用できる番号
          </label>
          <select
            id="authorityCode"
            {...register("authorityCode", { required: true })}
            required
            className={`block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
          >
            <option value="" disabled>
              -
            </option>
            {numbers.map((number) => (
              <option key={number.id} value={number.id}>
                {number.id}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label htmlFor={""} className="sr-only">
            業者の固有番号
          </label>
          <input
            type="text"
            id={""}
            className={`block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            placeholder={"6桁の数字"}
            minLength={6}
            maxLength={6}
            inputMode="numeric"
            {...register("contractorUniqueNumber", {
              required: "業者の固有番号は必須です.",
            })}
            required
          />
        </div>
      </div>
    </>
  );
}
