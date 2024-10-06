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
import { createLicense } from "@/actions/mswLicense";

const options = [
  { id: "1", title: "収集運搬" },
  { id: "2", title: "処分" },
];

export default function MswLicenseRegistrationForm({ id }: { id: number }) {
  const methods = useForm({
    defaultValues: {
      contractorId: id,
      prefectureId: "",
      municipalityId: "",
      type: "1",
      expirationDate: "",
      licenseUrl: "",
    },
  });
  const minDate = getTodayDate();

  const onSubmit = async (formData: any) => {
    console.log(formData);
    const result = await createLicense(formData);
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
            <DateInput
              name={"expirationDate"}
              label={"許可期限"}
              min={minDate}
            />
            <div>
              <TextInput
                id={"licenseUrl"}
                label={"許可証のURL"}
                name={"licenseUrl"}
                placeholder={"https://www.example.com/license/copy.pdf"}
                validation={{ required: "許可証のURLを入力してください." }}
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
