"use client"

import React from "react"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import { Client } from "@/types/types"

export default function SoleProprietorInputs({ register, errors }: {
    register: UseFormRegister<Client>;
    errors: FieldErrors<Client>;
}) {

    return (
        <>
            <div className="relative">
                <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                    氏名
                </label>
                <input
                    type="text"
                    id="name"
                    {...register("name", { required: "氏名は必須です" })}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
                    placeholder="与島大五郎"
                />
                {errors.name?.message && (
                    <p className="text-xs text-red-500 p-1">{errors.name?.message}</p>
                )}
            </div>
            <div className="relative">
                <label
                    htmlFor="tradeName"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                    屋号
                </label>
                <input
                    type="text"
                    id="name"
                    {...register("tradeName")}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
                    placeholder="与島クリーン"
                />
            </div>

        </>

    )
}