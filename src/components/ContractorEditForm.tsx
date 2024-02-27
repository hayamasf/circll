"use client";

import React, { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";

import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

import { Contractor } from "@/types/types";
import { useUser } from "@auth0/nextjs-auth0/client";
import { updateContractor } from "@/actions/contractor";
import fetchPrefCityTown from "@/utils/fetchPrefCityTown";

export default function ContractorEditForm({
  contractor,
}: {
  contractor: Contractor;
}) {
  const { user } = useUser();
  const userId = user?.sub || "";

  if (userId) {
    return <EditForm contractor={contractor} userId={userId} />;
  }
  return <div className="mt-10">Loading...</div>;
}

function EditForm(props: { contractor: Contractor; userId: string }) {
  const { contractor } = props;

  const [formDataChanged, setFormDataChanged] = useState(false);

  const {
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
    setValue,
  } = useForm<Contractor>({
    defaultValues: {
      name: contractor.name,
      title: contractor.title,
      representative: contractor.representative,
      zipCode: contractor.zipCode,
      prefecture: contractor.prefecture,
      city: contractor.city,
      town: contractor.town,
      address: contractor.address,
      address2: contractor.address2,
    },
  });

  // const getDirtyFields = () => {
  //   return dirtyFields;
  // }

  const onSubmit = () => {
    // const formData = new FormData();

    const dirtyFieldValues: Record<string, string> = {};
    Object.keys(dirtyFields).forEach((fieldName) => {
      if (dirtyFields[fieldName]) {
        // formData.append(fieldName, getValues(fieldName))
        dirtyFieldValues[fieldName] = getValues(fieldName);
      }
    });
    console.log(dirtyFieldValues);
    updateContractor(dirtyFieldValues)

    // console.log(formData);
    // updateContractor(formData)
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
    const zipCode = e.target.value;

    if (zipCode.length === 7) {
      const prefCityTown = await fetchPrefCityTown(zipCode);
      if (prefCityTown) {
        setPrefCityTown(prefCityTown);
      }
    }
  };

  // const handleUpdateContractor = (formData: Contractor) => {

  //   const data = {
  //     ...formData,
  //     updatedBy: props.userId
  //   }
  //   const changedData: Partial<Contractor> = {
  //   };

  //   Object.keys(data).forEach((key) => {
  //     if (data[key] !== contractor[key]) {
  //       changedData[key] = data[key];
  //     }
  //   })

  //   updateContractor(changedData as Contractor);
  // };

  // const handleChange = () => {
  //   setFormDataChanged(true);
  // }

  // const onSubmit = (formData: Contractor) => {
  //   const updatedFields: Partial<Contractor> = {}
  //   Object.keys(dirtyFields).forEach((fieldName) => {
  //     updatedFields[fieldName] = formData[fieldName];
  //   })
  //   updateContractor(updatedFields as Contractor);
  // };

  // type UnknownObject = Record<string, unknown>;
  // type UnknownArrayOrObject = unknown[] | UnknownObject;

  // const dirtyValues = (
  //   dirtyFields: unknown | DirtyField,
  //   allValues: UnknownArrayOrObject | unknown[]
  // ): UnknownArrayOrObject | unknown => {

  //   if (dirtyFields === true || Array.isArray(dirtyFields))
  //     return allValues;

  //   const dirtyFieldsObject = dirtyFields as UnknownObject;
  //   const allValuesObject = allValues as UnknownObject;

  //   return Object.fromEntries(
  //     Object.keys(dirtyFieldsObject).map((key) => [
  //       key,
  //       dirtyFields(dirtyFieldsObject[key], allValuesObject[key])
  //     ])
  //   )
  // }

  // const onSubmit = (FormData: Contractor) => {
  //   alert(JSON.stringify(dirtyValues(dirtyFields, FormData)));
  // }

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
              htmlFor="zipCode"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              郵便番号
            </label>
            <input
              type="text"
              id="zipCode"
              {...register("zipCode", {
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
          {errors.zipCode?.message && (
            <p className="text-xs text-red-500 p-1">{errors.zipCode.message}</p>
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
        <SubmitButton label="登録" />
        <CancelButton label="キャンセル" onClick={() => reset()} />
      </div>
    </form>
  );
}
