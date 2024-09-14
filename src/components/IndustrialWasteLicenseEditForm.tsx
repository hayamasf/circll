"use client"

import React from "react";
import { IndustrialWasteLicense, Contractor, WasteItem } from "@prisma/client";
import { useForm, FormProvider } from "react-hook-form";
import getTodayDate from "@/utils/getTodayDate";
import { updateLicense } from "@/actions/industrialWasteLicense";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

type IndustrialWasteLicenseWithRelations = IndustrialWasteLicense & {
  contractor: Contractor;
  wasteItems: WasteItem[];
};

export default function IndustrialWasteLicenseEditForm({
  license,
}: {
  license: IndustrialWasteLicenseWithRelations | null;
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
      wasteItems: license?.wasteItems,
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
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="mt-10 grid gap-y-5">
          <SubmitButton
            label="登録"
            disabled={methods.formState.isSubmitting}
          />
          <CancelButton label="キャンセル" onClick={() => methods.reset()} />
        </div>
      </form>
    </FormProvider>
  );
}
