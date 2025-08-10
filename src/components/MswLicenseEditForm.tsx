"use client";

import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import DatePickerComponent from "./DatePickerComponent";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import { MswLicense, Municipality } from "@prisma/client";
import { updateLicense } from "@/actions/mswLicense";

export default function MswLicenseEditForm({
  license,
}: {
  license: MswLicense & { municipality: Municipality };
}) {
  const methods = useForm({
    defaultValues: {
      contractorId: license.contractorId,
      expirationDate: license.expirationDate,
      licenseUrl: license.licenseUrl ?? "",
    },
  });
  const today = new Date();

  type updatable = Pick<MswLicense, "expirationDate" | "licenseUrl">;
  type UpdateInput = Partial<updatable> &
    Pick<MswLicense, "id" | "contractorId">;

  const onSubmit = async () => {
    const { dirtyFields } = methods.formState;

    const raw = methods.getValues() as {
      expirationDate?: Date | string | null;
      licenseUrl?: string | null;
    };

    const updated: Partial<updatable> = {};

    if (dirtyFields.expirationDate) {
      const v = raw.expirationDate;
      if (v instanceof Date) updated.expirationDate = v;
      else if (typeof v === "string" && v !== "") {
        updated.expirationDate = new Date(v);
      }
    }

    if (dirtyFields.licenseUrl) {
      const v = raw.licenseUrl;
      if (typeof v === "string" && v.trim() !== "") {
        updated.licenseUrl = v.trim();
      }
    }

    const payload: UpdateInput = {
      id: license.id,
      contractorId: license.contractorId,
      ...updated,
    };

    // const formData = methods.getValues() as Partial<MswLicense>;

    // const updatedData = Object.keys(dirtyFields).reduce(
    //   (acc, key) => {
    //     const typedKey = key as keyof MswLicense;
    //     let value = formData[typedKey];

    //     if (value !== undefined && value !== null) {
    //       acc[typedKey] = value;
    //     } else if (typedKey === "licenseUrl" && value === null) {
    //       acc[typedKey] = undefined as any
    //     }
    //     return acc;
    //   },
    //   { id: license.id, contractorId: license.contractorId } as Record<
    //     keyof MswLicense,
    //     MswLicense[keyof MswLicense]
    //   >,
    // );

    console.log(payload);
    await updateLicense(payload);
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
          </div>
          <div className="mt-10 grid gap-y-5">
            <SubmitButton
              label="変更する"
              disabled={
                methods.formState.isSubmitting || !methods.formState.isDirty
              }
            />
            <CancelButton label="キャンセル" onClick={() => methods.reset()} />
          </div>
        </form>
      </FormProvider>
    </>
  );
}
