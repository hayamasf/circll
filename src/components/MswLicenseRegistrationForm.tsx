"use client";

import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import PrefectureMunicipalitySelect from "./PrefectureMunicipalitySelect";
import RadioGroup from "./RadioGroup";
import DateInput from "./DateInput";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import getTodayDate from "@/utils/getTodayDate";
import TextInput from "./TextInput";
import { createMswLicense } from "@/actions/mswLicense";
import DatePickerComponent from "./DatePickerComponent";
import {
  mswLicenseSchema,
  MswLicenseFormData,
} from "@/schemas/mswLicenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const options = [
  { id: "1", title: "収集運搬" },
  { id: "2", title: "処分" },
];

export default function MswLicenseRegistrationForm({ id }: { id: number }) {
  const methods = useForm<MswLicenseFormData>({
    resolver: zodResolver(mswLicenseSchema),
    defaultValues: {
      contractorId: id,
      prefectureId: null,
      municipalityId: null,
      type: "1",
      expirationDate: "",
      licenseUrl: "",
    },
  });

  const today = new Date();

  const onSubmit = async (formData: MswLicenseFormData) => {
    console.log(formData);
    const result = await createMswLicense(formData);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid gap-y-10">
            <RadioGroup
              legendTitle={"業の種類"}
              groupName={"type"}
              options={options}
              defaultValue={methods.getValues("type")}
            />
            <PrefectureMunicipalitySelect />
            <div className="grid grid-cols-2 gap-x-6">
              <div className="col-span-2 sm:col-span-1">
                <DatePickerComponent
                  id="expirationDate"
                  label="許可期限"
                  name="expirationDate"
                  minDate={today}
                  validation={{ required: "有効期限は必須です." }}
                  control={methods.control}
                />
              </div>
            </div>

            <div>
              <TextInput
                id={"licenseUrl"}
                label={"許可証のURL"}
                name={"licenseUrl"}
                type="url"
                placeholder={"https://www.example.com/license/copy.pdf"}
                // validation={{ required: "許可証のURLを入力してください." }}
                // required={true}
              />
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
