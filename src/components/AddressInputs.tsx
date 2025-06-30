"use client";

import React, { useEffect, useState, ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { Address } from "@/types/types";
import { classNames } from "@/utils/classNames";

export default function AddressInputs() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<Address>();

  const setPrefectureCityTown = ({
    pref,
    city,
    town,
  }: {
    pref: string;
    city: string;
    town: string;
  }) => {
    setValue("prefecture", pref);
    setValue("city", city);
    setValue("town", town);
  };

  const [postalCode, setPostalCode] = useState<string>("");
  const [isValidPostalCode, setIsValidPostalCode] = useState<boolean>(false);

  const handlePostalCodeChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPostalCode(value);

    if (/^\d{7}$/.test(value)) {
      try {
        const res = await fetch("/api/postcodeJP?postalcode=" + value);
        const data = await res.json();
        const { pref, city, town } = data;

        if (pref && city && town) {
          setPrefectureCityTown({ pref, city, town });
        }
      } catch (error) {
        console.error("住所取得エラー", error);
      }
    }
  };

  return (
    <div className="py-10 space-y-10 border-b border-gray-900/10">
      <div className="grid gap-x-6 gap-y-8 grid-cols-6">
        <div className="col-span-2">
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            郵便番号
          </label>
          <div className="mt-2">
            <input
              id="postalCode"
              type="text"
              {...register("postalCode", { required: "郵便番号は必須です" })}
              maxLength={7}
              onChange={handlePostalCodeChange}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="1040032"
            />
          </div>
          {errors.postalCode?.message && (
            <p className="text-xs text-red-500 p-1">
              {errors.postalCode?.message}
            </p>
          )}
        </div>
        {/* <div className="col-span-2 place-content-end">
          <button
            type="button"
            className={classNames(
              "block w-full text-base rounded-md px-2 py-1.5 shadow-lg bg-gray-700 text-white",
              isValidPostalCode
                ? "bg-gray-700 ring-1 ring-inset hover:bg-gray-800"
                : "bg-gray-300 ring-0 cursor-not-allowed",
            )}
            onClick={handleButtonClick}
            disabled={!isValidPostalCode}
          >
            〒 → 住所
          </button>
        </div> */}
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="prefecture"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            都道府県
          </label>
          <div className="mt-2">
            <input
              id="prefecture"
              type="text"
              {...register("prefecture", { required: "必須" })}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="東京都"
              readOnly={true}
            />
          </div>
          {errors.prefecture?.message && (
            <p className="text-xs text-red-500 p-1">
              {errors.prefecture.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            市区町村
          </label>
          <div className="mt-2">
            <input
              id="city"
              type="text"
              {...register("city", { required: "必須" })}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="中央区"
              readOnly={true}
            />
          </div>
          {errors.city?.message && (
            <p className="text-xs text-red-500 p-1">{errors.city.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="town"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            町域
          </label>
          <div className="mt-2">
            <input
              id="town"
              type="text"
              {...register("town", { required: "必須" })}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="八丁堀"
            />
          </div>
          {errors.town?.message && (
            <p className="text-xs text-red-500 p-1">{errors.town.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            丁目、番地以下
          </label>
          <div className="mt-2">
            <input
              id="address"
              type="text"
              {...register("address", { required: "住所は必須です" })}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="三丁目12番8号"
            />
          </div>
          {errors.address?.message && (
            <p className="text-xs text-red-500 p-1">{errors.address.message}</p>
          )}
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="address2"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ビル名など（オプショナル）
          </label>
          <div className="mt-2">
            <input
              id="address2"
              type="text"
              {...register("address2")}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="HF八丁堀ビル"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
