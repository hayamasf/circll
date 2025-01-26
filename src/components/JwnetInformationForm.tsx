"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitAndCancelButtons from "./SubmitAndCancelButtons";
import { XMarkIcon } from "@heroicons/react/24/outline";

type JwnetInformationProps = {
  JwnetId: string;
}

export default function JwnetInformationForm() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<JwnetInformationProps>();

  const onSubmit = async (formData: any) => {
    await console.log(formData)
  }

  return (
    <div className="flex p-4 place-content-center">
      <div className="flex items-center space-x-4">
        <label className="text-sm text-gray-800">加入者番号</label>
        <input
          type="text"
          value={1234567}
          disabled
          size={10}
          className="border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-sm text-right"
        />
        <button type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-sm text-blue-700 font-semibold">編集する</button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-900">JWNET加入者番号</h3>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>加入者番号（数字7桁）を入力してください.</p>
              </div>
              <form className="mt-5 sm:flex sm:items-center">
                <div className="w-full sm:max-w-xs">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-label="Email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 text-nowrap inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
                >
                  保存
                </button>
              </form>
            </div>
          </div>
          {/* <div className="bg-white p-6 rounded-lg">
            <form>
              <div className="">
                <label htmlFor="JwnetId" className="block text-sm text-gray-800">
                  JWNET加入者番号（7桁）
                </label>
                <input
                  id="JwnetId"
                  type="text"
                  maxLength={7}
                  {...register("JwnetId", {
                    required: "入力必須",
                    pattern: {
                      value: /^[0-9]{7}$/,
                      message: "加入者番号は数字7桁です."
                    }
                  })}
                  className="mt-2 border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>
              {errors.JwnetId && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.JwnetId.message}
                </p>
              )}
              <SubmitAndCancelButtons onCancel={() => setIsModalOpen(false)} onSubmit={handleSubmit(onSubmit)} />
            </form>
          </div> */}
        </div>
      )}
    </div>
  )
}

