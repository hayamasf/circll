"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useSearchParams } from "next/navigation";

import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import { LegalEntity } from "@/types/types";
import LegalEntityTypeSelector from "./LegalEntityTypeSelector";
import CorporateEntityInputs from "./CorporateEntityInputs";
import SoleProprietorInputs from "./SoleProprietorInputs";
import AddressInputs from "./AddressInputs";

export default function LegalEntityRegistrationForm({
  action,
}: {
  action: (formData: LegalEntity) => Promise<void>;
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

  const onSubmit = async (formData: LegalEntity) => {
    const { address2, tradeName, ...rest } = formData;

    const data = {
      ...rest,
      ...(address2 ? { address2 } : {}),
      ...(tradeName ? { tradeName } : {}),
    };

    console.log(data);
    const result = await action(data);
  };

  const searchParams = useSearchParams();
  const type = searchParams.get("type") as "corporate" | "sole-proprietor";

  return (
    <>
      <LegalEntityTypeSelector type={type} />
      <FormProvider {...methods}>
        {type && (
          <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-10">
            <div className="grid gap-y-8">
              {type === "corporate" && <CorporateEntityInputs />}
              {type === "sole-proprietor" && <SoleProprietorInputs />}
              <hr className="my-2" />
              <AddressInputs />
            </div>
            <div className="mt-10 grid gap-y-5">
              <SubmitButton
                label="登録"
                disabled={methods.formState.isSubmitting}
              />
              <CancelButton
                label="キャンセル"
                onClick={() => methods.reset()}
              />
            </div>
          </form>
        )}
      </FormProvider>
    </>
  );
}
