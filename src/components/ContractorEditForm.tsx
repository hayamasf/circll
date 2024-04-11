"use client";

import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

import { LegalEntity } from "@/types/types";
import { updateContractor } from "@/actions/contractor";
import fetchPrefCityTown from "@/utils/fetchPrefCityTown";
import { useParams } from "next/navigation";

export default function ContractorEditForm({
  contractor,
}: {
  contractor: LegalEntity;
}) {
  const router = useRouter();

  const params = useParams<{ id: string }>();
  const id = params.id;

  const {
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isDirty },
    setValue,
  } = useForm<LegalEntity>({
    defaultValues: {
      name: contractor.name,
      title: contractor.title,
      representative: contractor.representative,
      postalCode: contractor.postalCode,
      prefecture: contractor.prefecture,
      city: contractor.city,
      town: contractor.town,
      address: contractor.address,
      address2: contractor.address2,
    },
  });

  const getDirtyFieldValues = () => {
    const dirtyFieldValues: Record<string, string> = {};
    Object.keys(dirtyFields).forEach((fieldName) => {
      if (dirtyFields[fieldName]) {
        dirtyFieldValues[fieldName] = getValues(fieldName);
      }
    });

    return dirtyFieldValues;
  };

  const onSubmit = async () => {
    try {
      const data = getDirtyFieldValues();
      const result = await updateContractor(data);
      if (result.success) {
        console.log(result.message);

        router.push(`/contractors/${id}`);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("データ更新時にエラーが発生しました.", error);
    }
  };

  const setPrefCityTown = ({
    pref,
    city,
    town,
  }: {
    pref: string;
    city: string;
    town: string;
  }) => {
    setValue("prefecture", pref, { shouldDirty: true });
    setValue("city", city, { shouldDirty: true });
    setValue("town", town, { shouldDirty: true });
  };

  const handleZipCodeInput = async (e: ChangeEvent<HTMLInputElement>) => {
    const postalCode = e.target.value;

    if (postalCode.length === 7) {
      const prefCityTown = await fetchPrefCityTown(postalCode);
      if (prefCityTown) {
        setPrefCityTown(prefCityTown);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="grid gap-y-8">
        <div className="relative">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            業者名
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "業者名は必須です" })}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
          {errors.name?.message && (
            <p className="text-xs text-red-500 p-1">{errors.name?.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-x-3">
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
              {...register("title", { required: "代表者役職名は必須です" })}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {errors.title?.message && (
              <p className="text-xs text-red-500 p-1">
                {errors.title?.message}
              </p>
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
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {errors.representative?.message && (
              <p className="text-xs text-red-500 p-1">
                {errors.representative?.message}
              </p>
            )}
          </div>
        </div>
        <hr className="my-2" />

        <div className="grid grid-cols-3 gap-x-1">
          <div className="relative">
            <label
              htmlFor="postalCode"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              郵便番号
            </label>
            <input
              type="text"
              id="postalCode"
              {...register("postalCode", {
                required: "郵便番号は必須です",
                onChange: (e) => {
                  handleZipCodeInput(e);
                },
              })}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
          </div>
          <div className="pt-2 text-gray-900 col-span-2 sm:text-sm">
            ← ハイフンなし、7桁
          </div>
          {errors.postalCode?.message && (
            <p className="text-xs text-red-500 p-1">{errors.postalCode.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-x-1">
          <div className="relative">
            <label
              htmlFor="prefecture"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              都道府県
            </label>
            <input
              type="text"
              id="prefecture"
              {...register("prefecture", { required: "必須" })}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              readOnly
            />
            {errors.prefecture?.message && (
              <p className="text-xs text-red-500 p-1">
                {errors.prefecture.message}
              </p>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="city"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              市区町村
            </label>
            <input
              type="text"
              id="city"
              {...register("city", { required: "必須" })}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              readOnly
            />
            {errors.city?.message && (
              <p className="text-xs text-red-500 p-1">{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-1">
          <div className="relative">
            <label
              htmlFor="town"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              町域
            </label>
            <input
              type="text"
              id="town"
              {...register("town", { required: "必須" })}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {errors.town?.message && (
              <p className="text-xs text-red-500 p-1">{errors.town.message}</p>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="address"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              丁目、番地以下
            </label>
            <input
              type="text"
              id="address"
              {...register("address", { required: "住所は必須です" })}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {errors.address?.message && (
              <p className="text-xs text-red-500 p-1">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-between">
            <label
              htmlFor="address2"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              ビル名など
            </label>
            <span
              className="absolute -top-2 right-2 inline-block bg-white px-1 text-xs text-gray-900"
              id="address2-optional"
            >
              （任意）
            </span>
          </div>
          <input
            type="text"
            id="address2"
            {...register("address2")}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
        </div>
      </div>
      <div className="mt-10 grid gap-y-5">
        <SubmitButton label="登録" disabled={!isDirty} />
        <CancelButton label="キャンセル" onClick={() => reset()} />
      </div>
    </form>
  );
}
