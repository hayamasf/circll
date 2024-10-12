"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import IndustrialWasteLicenseNumberSelect from "./IndustrialWasteLicenseNumberSelect";
import DateInput from "./DateInput";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import getTodayDate from "@/utils/getTodayDate";
import Input from "./Input";
import TextInput from "./TextInput";
import IndustrialWasteItemCheckbox from "./IndustrialWasteItemCheckbox";
import { createLicense } from "@/actions/industrialWasteLicense";
import { IndustrialWasteCategory } from "@prisma/client";

export default function IndustrialWasteLicenseRegistrationForm({
  id,
  industrialWasteCategories,
}: {
  id: number;
  industrialWasteCategories: IndustrialWasteCategory[];
}) {
  const methods = useForm({
    defaultValues: {
      contractorId: id,
      issuingAuthority: "",
      typeCode: "",
      authorityCode: "",
      contractorCode: "",
      expirationDate: "",
      licenseUrl: "",
      licensedCategoris: [],
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
            <IndustrialWasteLicenseNumberSelect />
            <DateInput
              name={"expirationDate"}
              label={"許可期限"}
              min={minDate}
              required={true}
            />
            <div>
              <TextInput id="licenseUrl" label="許可証のURL" name="licenseUrl" type="url" placeholder="https://www.example.com/license/copy.pdf" validation={{ required: "URLを入力してください." }} />
            </div>
            <IndustrialWasteItemCheckbox
              industrialWasteCategories={industrialWasteCategories}
            />
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
