"use client";

import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import DateInput from "./DateInput";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import getTodayDate from "@/utils/getTodayDate";
import TextInput from "./TextInput";
import { formatDate } from "@/utils/dateUtils";

const options = [
  { id: "1", title: "収集運搬" },
  { id: "2", title: "処分" },
];

export default function MswLicenseEditForm({ license }: any) {
  const methods = useForm({
    defaultValues: {
      contractorId: license.contractorId,
      type: String(license.type),
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
      <div className="pb-10">
        { }
        {license.type === 1 ? "収集運搬" : "処分"} 業許可
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid gap-y-10">
            <DateInput
              name={"expirationDate"}
              label={"許可期限"}
              min={minDate}
            />
            <TextInput
              label={"許可証のURL"}
              name={"licenseUrl"}
              placeholder={"https://www.example.com/license/copy.pdf"}
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
