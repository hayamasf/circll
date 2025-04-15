"use client";

import React, { useEffect, useState } from "react";
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
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  useEffect(() => {
    setIsValidPostalCode(/^\d{7}$/.test(postalCode));
  }, [postalCode]);

  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_POSTCODEJP_API_KEY;

    if (buttonClicked) {
      const fetchPrefCityTown = async () => {
        try {
          const response = await fetch(
            "https://apis.postcode-jp.com/api/v6/postcodes/" + postalCode,
            {
              headers: {
                Authorization: "Bearer " + API_KEY,
              },
            },
          );

          if (!response.ok) {
            throw new Error("住所データの取得に失敗しました.");
          }

          const [data] = await response.json();

          if (!data) {
            alert(
              "該当の住所が見つかりませんでした.郵便番号を確認してください.",
            );
            throw new Error("住所情報が見つかりませんでした.");
          }
          const { pref, city, town } = data;

          console.log("都道府県: ", pref);
          console.log("市区町村: ", city);
          console.log("町域: ", town);

          setPrefectureCityTown({
            pref,
            city,
            town,
          });
        } catch (error) {
          if (error instanceof Error) {
            console.error("エラーが発生しました.", error.message);
          }
        } finally {
          setButtonClicked(false);
        }
      };
      fetchPrefCityTown();
    }
  }, [buttonClicked]);

  const handleButtonClick = () => {
    setButtonClicked(true);
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
              onChange={(e) => setPostalCode(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="1040032"
            />
          </div>
          {errors.postalCode?.message && (
            <p className="text-xs text-red-500 p-1">
              {errors.postalCode?.message}
            </p>
          )}
        </div>
        <div className="col-span-2 place-content-end">
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
        </div>
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="HF八丁堀ビル"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
