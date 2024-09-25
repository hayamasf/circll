"use client";

import React from "react";
import {
  IndustrialWasteLicense,
  Contractor,
  IndustrialWasteCategory,
} from "@prisma/client";
import { useForm, FormProvider } from "react-hook-form";
import getTodayDate from "@/utils/getTodayDate";
import { updateLicense } from "@/actions/industrialWasteLicense";
import DateInput from "./DateInput";
import Input from "./Input";
import IndustrialWasteItemCheckbox from "./IndustrialWasteItemCheckbox";
import { formatDate } from "@/utils/dateUtils";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

type IndustrialWasteLicenseWithRelations = IndustrialWasteLicense & {
  contractor: Contractor;
  licensedCategories: IndustrialWasteCategory[];
};

export default function IndustrialWasteLicenseEditForm({
  license,
  industrialWasteCategories,
}: {
  license: IndustrialWasteLicenseWithRelations | null;
  industrialWasteCategories: IndustrialWasteCategory[];
}) {
  const arr = [{ id: 1 }, { id: 7 }, { id: 10 }, { id: 11 }]
  const methods = useForm({
    defaultValues: {
      contractorId: license?.contractorId,
      issuingAuthority: license?.issuingAuthority,
      typeCode: license?.typeCode,
      authorityCode: license?.authorityCode,
      contractorCode: license?.contractorCode,
      expirationDate: license?.expirationDate
        ? formatDate(license?.expirationDate)
        : "",
      licenseUrl: license?.licenseUrl,
      licensedCategories: license?.licensedCategories.map((category) => String(category.id)) || [],
    },
  });

  const minDate = getTodayDate();

  const onSubmit = async (formData: any) => {
    console.log(formData);
    console.log("送信");
    const result = await updateLicense(formData);
  };

  if (!license) {
    return <div>データが見つかりません.</div>;
  }

  return (
    <FormProvider {...methods}>
      <div>
        <p className="text-sm">
          許可番号 第{" "}
          <span className="text-lg font-semibold">
            {license.issuingAuthority === 13
              ? license.issuingAuthority
              : license.issuingAuthority.toString().padStart(3, "0")}{" "}
            {license.typeCode}
            {license.authorityCode} {license.contractorCode}
          </span>
        </p>
      </div>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="mt-10 grid gap-y-10">
          <DateInput
            name={"expirationDate"}
            label={"許可期限"}
            min={minDate}
            required={true}
          />
          <Input
            label="許可証のURL"
            name="licenseUrl"
            type="url"
            placeholder="https://www.example.com/license/copy.pdf"
            required={true}
          />
          <IndustrialWasteItemCheckbox
            industrialWasteCategories={industrialWasteCategories}
          />
          <SubmitButton
            label="登録"
            disabled={
              methods.formState.isSubmitting || !methods.formState.isDirty
            }
          />
          <CancelButton label="キャンセル" onClick={() => methods.reset()} />
        </div>
      </form>
    </FormProvider>
  );
}
