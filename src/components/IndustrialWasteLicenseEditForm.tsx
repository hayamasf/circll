"use client";

import React from "react";
import {
  IndustrialWasteLicense,
  Contractor,
  IndustrialWasteCategory,
} from "@prisma/client";
import { useForm, FormProvider } from "react-hook-form";
import { updateLicense } from "@/actions/industrialWasteLicense";
import DatePickerComponent from "./DatePickerComponent";
import TextInput from "./TextInput";
import IndustrialWasteItemCheckbox from "./IndustrialWasteItemCheckbox";
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
  const methods = useForm({
    defaultValues: {
      contractorId: license?.contractorId,
      issuingAuthority: license?.issuingAuthority,
      typeCode: license?.typeCode,
      authorityCode: license?.authorityCode,
      contractorCode: license?.contractorCode,
      expirationDate: license?.expirationDate,
      licenseUrl: license?.licenseUrl,
      licensedCategories:
        license?.licensedCategories.map((category) => String(category.id)) ||
        [],
    },
  });

  const today = new Date();

  const onSubmit = async () => {
    const { dirtyFields } = methods.formState;
    const formData = methods.getValues() as Partial<IndustrialWasteLicense>;

    const updatedData = Object.keys(dirtyFields).reduce(
      (acc, key) => {
        const typedKey = key as keyof IndustrialWasteLicense;
        const value = formData[typedKey];
        if (value !== null && value !== undefined) {
          acc[typedKey] = value;
        }
        return acc;
      },
      { id: license?.id, contractorId: license?.contractorId } as Record<
        keyof IndustrialWasteLicense,
        IndustrialWasteLicense[keyof IndustrialWasteLicense]
      >,
    );

    console.log(updatedData);
    await updateLicense(
      updatedData as Partial<IndustrialWasteLicenseWithRelations>,
    );
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
              id="licenseUrl"
              label="許可証のURL"
              name="licenseUrl"
              type="url"
              placeholder="https://www.example.com/license/copy.pdf"
              validation={{ required: "URLを入力してください." }}
              required={true}
            />
          </div>
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
