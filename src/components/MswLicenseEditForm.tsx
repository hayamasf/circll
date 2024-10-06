"use client";

import React from "react";

import { useForm, FormProvider, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DateInput from "./DateInput";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import getTodayDate from "@/utils/getTodayDate";
import TextInput from "./TextInput";
import { formatDate } from "@/utils/dateUtils";

export default function MswLicenseEditForm({ license }: any) {
  const methods = useForm({
    defaultValues: {
      contractorId: license.contractorId,
      expirationDate: formatDate(license.expirationDate),
      licenseUrl: license.licenseUrl,
    },
  });
  const minDate = getTodayDate();

  const onSubmit = async (formData: any) => {
    console.log(formData);
    // const result = await createLicense(formData);
  };

  return (
    <>
      <div className="pb-10 font-semibold text-gray-800 text-base">
        {license.municipality.name}
        <span className="text-sm text-gray-500 font-thin">の</span>
        {license.type === 1 ? "収集運搬" : "処分"}業
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid gap-y-10">
            <Controller
              name="expirationDate"
              control={methods.control}
              render={({ field }) => (
                <div>
                  <label
                    htmlFor="expirationDate"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                  >
                    許可期限
                  </label>
                  <DatePicker
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
                  />
                </div>
              )}
            ></Controller>

            {/* <DateInput
              name={"expirationDate"}
              label={"許可期限"}
              min={minDate}
            /> */}
            <TextInput
              id={"licenseUrl"}
              label={"許可証のURL"}
              name={"licenseUrl"}
              placeholder={""}
              validation={{ required: "許可証のURLを入力してください." }}
            />
          </div>
          <div className="mt-10 grid gap-y-5">
            <SubmitButton
              label="変更する"
              disabled={methods.formState.isSubmitting}
            />
            <CancelButton label="キャンセル" onClick={() => methods.reset()} />
          </div>
        </form>
      </FormProvider>
    </>
  );
}
