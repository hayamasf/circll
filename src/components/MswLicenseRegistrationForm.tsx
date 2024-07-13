"use client";

import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import RadioGroup from "./RadioGroup";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

const options = [
  { id: "1", title: "収集運搬" },
  { id: "2", title: "処分" },
];

export default function MswLicenseRegistrationForm() {
  const methods = useForm();

  const onSubmit = async (formData: any) => {
    console.log(formData);
  };

  return (
    <>
      <div className="mt-2 mb-8">一般廃棄物</div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid gap-y-10">
            <RadioGroup
              legendTitle={"業の種類"}
              groupName={"type"}
              options={options}
            />
            <div>
              <div className="relative">
                <label
                  htmlFor="expirationDate"
                  className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  許可期限
                </label>
                <input
                  type="date"
                  id="expirationDate"
                  {...methods.register("expirationDate")}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-y-5">
            <SubmitButton
              label="登録"
              disabled={methods.formState.isSubmitting}
            />
            <CancelButton label="キャンセル" onClick={() => methods.reset()} />
          </div>
        </form>
      </FormProvider>
    </>
  );
}
