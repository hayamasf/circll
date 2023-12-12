"use client";

import { useForm } from "react-hook-form";

import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

import { ContractorRegistration } from "@/actions/ContractorRegistration";
import { ContractorRegistrationInputs } from "@/types/types";

import usePostcodeJP from "@/hooks/usePostcodeJP";

const ContractorRegistrationForm = () => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm<ContractorRegistrationInputs>(
    {
      defaultValues: {
        name: "",
        title: "",
        representative: "",
        zipCode: "",
        prefecture: "",
        city: "",
        town: "",
        address: "",
        address2: "",
      },
    }
  )

  const onSubmit = handleSubmit((formData) => { ContractorRegistration(formData) })

  const { zipCode, prefecture, city, town, handleZipCodeChange } = usePostcodeJP();

  return (
    <form onSubmit={onSubmit} className="mt-10">
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
            {...register("name")}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            placeholder="株式会社サティスファクトリー"
          />
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
              {...register("title")}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder="代表取締役"
            />
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
              {...register("representative")}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder="小松武司"
            />
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
              {...register("zipCode")}
              onChange={handleZipCodeChange}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder="1040032"
            />
          </div>
          <div className="pt-2 text-gray-900 sm:text-sm">← ハイフンなし</div>

        </div>
        <div className="flex gap-x-1">
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
              value={prefecture}
              {...register("prefecture")}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder="東京都"
              disabled={true}
            />
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
              value={city}
              {...register("city")}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder="中央区"
              disabled={true}
            />
          </div>

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
              value={town}
              {...register("town")}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder="八丁堀"
              disabled={true}
            />
          </div>
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
            {...register("address")}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            placeholder="三丁目12番8号"
          />
        </div>

        <div className="relative">
          <div className="flex justify-between">
            <label
              htmlFor="address2"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              ビル名など
            </label>
            <span className="absolute -top-2 right-2 inline-block bg-white px-1 text-xs text-gray-900" id="address2-optional">
              （任意）
            </span>
          </div>
          <input
            type="text"
            id="address2"
            {...register("address2")}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            placeholder="HF八丁堀ビル"
          />
        </div>
      </div>
      <div className="mt-10 grid gap-y-5">
        <SubmitButton label="登録" />
        <CancelButton label="キャンセル"
          onClick={() => reset()} />
      </div>
    </form>
  );
};

export default ContractorRegistrationForm;
