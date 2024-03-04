"use client";

import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

import { Contractor } from "@/types/types";

import { createContractor } from "@/actions/contractor";
import fetchPrefCityTown from "@/utils/fetchPrefCityTown";

export default function ClientForm() {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
        watch,
    } = useForm<Contractor>({
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
    });

    const setPrefCityTown = ({
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

    const handleZipCodeInput = async (e: ChangeEvent<HTMLInputElement>) => {
        const zipCode = e.target.value;
        if (zipCode.length === 7) {
            const prefCityTown = await fetchPrefCityTown(zipCode);
            if (prefCityTown) {
                setPrefCityTown(prefCityTown);
            }
        }
    };

    const onSubmit = (data: Contractor) => {
        createContractor(data);
    };

    const isSoleProprietor = watch("isSoleProprietor")

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div className="grid gap-y-8">
                <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id="isSoleProprietor"
                            aria-describedby="comments-description"
                            {...register("isSoleProprietor")}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600"
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <label htmlFor="isSoleProprietor" className="font-medium text-gray-900">
                            個人事業者
                        </label>{' '}
                        <span id="isSoleProprietor-description" className="text-gray-500">
                            <span className="sr-only">個人事業者 </span>法人でない場合にチェック
                        </span>
                    </div>
                </div>
                <div className="relative">
                    <label
                        htmlFor="name"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        事業者名（法人名もしくは個人名）
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: "業者名は必須です" })}
                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                        placeholder="サティスファクトリー"
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
                            {...register("title", { required: isSoleProprietor ? false : "代表者役職名は必須です" })}
                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            placeholder="代表取締役"
                            disabled={isSoleProprietor}
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
                            placeholder="小松武司"
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
                            {...register("zipCode", { required: "郵便番号は必須です" })}
                            onChange={(e) => {
                                handleZipCodeInput(e);
                            }}
                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            placeholder="1040032"
                        />
                    </div>
                    <div className="pt-2 text-gray-900 col-span-2 sm:text-sm">
                        ← ハイフンなし、7桁
                    </div>
                    {errors.zipCode?.message && (
                        <p className="text-xs text-red-500 p-1">{errors.zipCode.message}</p>
                    )}
                </div>

                {/* テスト用ここから */}
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
                            placeholder="東京都"
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
                            placeholder="中央区"
                            readOnly
                        />
                        {errors.city?.message && (
                            <p className="text-xs text-red-500 p-1">{errors.city.message}</p>
                        )}
                    </div>
                </div>

                {/* ここから */}
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
                            placeholder="八丁堀"
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
                            placeholder="三丁目12番8号"
                        />
                        {errors.address?.message && (
                            <p className="text-xs text-red-500 p-1">
                                {errors.address.message}
                            </p>
                        )}
                    </div>
                </div>
                {/* ここまで */}
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
                        placeholder="HF八丁堀ビル"
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
