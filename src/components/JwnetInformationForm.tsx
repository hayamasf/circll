"use client";

import React, { useState } from "react";
import { useForm, } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";

type JwnetInformationProps = {
  jwnetId: string;
}

export default function JwnetInformationForm({ label, jwnetId }: { label: string, jwnetId?: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, handleSubmit, watch, formState: { isValid } } = useForm<JwnetInformationProps>({
    mode: "onChange",
  });

  const onSubmit = async (formData: any) => {
    await console.log(formData)
  }

  // const jwnetIdValue = watch("jwnetId")

  return (
    <div className="flex p-4 place-content-center">
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-800">
          {label}
        </span>
        <span className="border border-gray-300 rounded-md pl-3 pr-20 py-1.5 bg-gray-100 text-sm">
          {jwnetId ? jwnetId : "登録なし"}
        </span>
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
                  className="rounded-full p-1 bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>加入者番号（数字7桁）を入力してください.</p>
              </div>
              <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full sm:max-w-xs">
                  <input
                    type="text"
                    id="jwnetId"
                    {...register("jwnetId", {
                      required: true,
                      pattern: {
                        value: /^[0-9]{7}$/,
                        message: "",
                      }
                    })}
                    maxLength={7}
                    placeholder="1234567"
                    aria-label="jwnetId"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`mt-3 text-nowrap inline-flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm
                      sm:w-auto sm:ml-3 sm:mt-0 ${isValid ? "bg-gray-600 text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                >
                  保存
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

