"use client";

import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import RadioGroup from "./RadioGroup";
import DateInput from "./DateInput";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import getTodayDate from "@/utils/getTodayDate";

const options = [
  { id: "1", title: "収集運搬" },
  { id: "2", title: "処分" },
];

export default function MswLicenseRegistrationForm() {
  const methods = useForm();
  const minDate = getTodayDate();

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
            <DateInput name={"expirationDate"} label={"許可期限"} min={minDate} />
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
