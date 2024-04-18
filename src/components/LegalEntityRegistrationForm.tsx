"use client";

import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import { LegalEntity } from "@/types/types";
import CorporateEntityInputs from "./CorporateEntityInputs";
import SoleProprietorInputs from "./SoleProprietorInputs";
import AddressInputs from "./AddressInputs";

export default function LegalEntityRegistrationForm({
  type,
  onSubmit,
}: {
  type: "corporate" | "sole-proprietor";
  onSubmit: (formData: LegalEntity) => void;
}) {
  const methods = useForm<LegalEntity>({
    defaultValues: {
      entityType: "株式会社",
      isPrefixEntityType: true,
      name: "",
      title: "",
      representative: "",
      tradeName: "",
      postalCode: "",
      prefecture: "",
      city: "",
      town: "",
      address: "",
      address2: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-10">
        <div className="grid gap-y-8">
          {type === "corporate" && <CorporateEntityInputs />}
          {type === "sole-proprietor" && <SoleProprietorInputs />}
          <hr className="my-2" />
          <AddressInputs />
        </div>
        <div className="mt-10 grid gap-y-5">
          <SubmitButton label="登録" />
          <CancelButton label="キャンセル" onClick={() => methods.reset()} />
        </div>
      </form>
    </FormProvider>
  );
}
