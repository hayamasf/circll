"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import Card from "./Card";
import SubmitButton from "./SubmitButton";
import { JwnetInformationFormData } from "@/schemas/jwnetInformationSchema";

export default function JwnetInformationForm() {
  const pathName = usePathname();
  const isContractor = pathName.includes("/contractors/")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm<JwnetInformationFormData>({
    mode: "onChange",
  });

  const jwnetIdValue = watch("jwnetId") || "";
  const ediKeyValue = watch("ediKey") || "";

  const isJwnetIdValid = jwnetIdValue.length === 7;
  const isEdiKeyValid = isContractor || ediKeyValue.length === 8;

  const isDisabled = !isDirty || !isJwnetIdValid || !isEdiKeyValid;

  const onSubmit = async (formData: JwnetInformationFormData) => {
    console.log(formData);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col sm:flex-row items-end gap-y-4 sm:gap-y-0 sm:gap-x-4">
          <div className="w-full sm:w-1/3">
            <label htmlFor="jwnet-id" className="block text-sm/6 font-medium text-gray-900">
              加入者番号/ID
            </label>
            <div className="mt-2">
              <input
                id="jwnet-id"
                {...register("jwnetId")}
                type="text"
                placeholder="数字7桁"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          {!isContractor &&
            <div className="w-full sm:w-1/3">
              <label htmlFor="edi-key" className="block text-sm/6 font-medium text-gray-900">
                EDIキー
              </label>
              <div className="mt-2">
                <input
                  id="edi-key"
                  {...register("ediKey")}
                  type="text"
                  placeholder="数字8桁"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          }

          <div className="w-full sm:w-auto self-end flex justify-end">
            <SubmitButton label="保存" disabled={isDisabled} />
          </div>
        </div>
      </form>
    </Card>
  );
}
