"use client"

import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Client } from "@/types/types";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const entityTypePositions = [
    { id: "before", title: "前" },
    { id: "after", title: "後ろ" },
];

export default function LegalEntitySelector({ register, errors }: { register: UseFormRegister<Client>, errors: FieldErrors<Client> }) {

    return (
        <Tabs onSelect={(index) => console.log(index)} className={""} selectedTabClassName="bg-gray-100 font-bold hover:cursor-auto">
            <TabList className="flex justify-around text-sm">
                <Tab className={"w-1/2 text-center rounded-md px-3 py-2 hover:cursor-pointer"}>会社など法人</Tab>
                <Tab className={"w-1/2 text-center rounded-md px-3 py-2 hover:cursor-pointer"}>個人事業者</Tab>
            </TabList>

            <TabPanel className={"grid gap-y-8 mt-10"}>
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
                <div>
                    <label className="ml-3 text-xs text-gray-800">法人格の位置は、法人名称の</label>
                    <fieldset className="mt-0">
                        <legend className="sr-only">法人格の位置</legend>
                        <div className="ml-3 flex items-center space-x-10">
                            {entityTypePositions.map((position) => (
                                <div key={position.id} className="flex items-center">
                                    <input
                                        id={position.id}
                                        type="radio"
                                        value={String(position.id === "before")}
                                        defaultChecked={position.id === "before"}
                                        className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-600"
                                        {...register("isPrefixEntityType")}
                                    />
                                    <label
                                        htmlFor={position.id}
                                        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        {position.title}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>
                <div className="relative">
                    <label
                        htmlFor="name"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        法人名称（法人格は入力しない）
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
                            {...register("title", {
                                required: "代表者役職名は必須です",
                            })}
                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
                            placeholder="代表取締役"
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
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    )
}
