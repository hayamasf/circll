"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import LegalEntityTypeSelector from "./LegalEntityTypeSelector";
import CorporateEntityInputs from "./CorporateEntityInputs";
import SoleProprietorInputs from "./SoleProprietorInputs";
import AddressInputs from "./AddressInputs";
import { createClient } from "@/actions/client";
import { createContractor } from "@/actions/contractor";
import { LegalEntityFormData } from "@/types/types";

export default function LegalEntityRegistrationForm({
  entity,
}: {
  entity: string;
}) {
  const methods = useForm<LegalEntityFormData>({
    defaultValues: {
      entityType: "株式会社",
      isPrefixEntityType: true,
      name: "",
      representativeTitle: "",
      representativeName: "",
      tradeName: "",
      postalCode: "",
      prefecture: "",
      city: "",
      town: "",
      address: "",
      address2: "",
    },
  });

  const onSubmit = async (formData: LegalEntityFormData) => {
    try {
      if (entity === "client") {
        const result = await createClient(formData);
      } else if (entity === "contractor") {
        const result = await createContractor(formData);
      }
    } catch (error) {
      console.error("エラーです:", error);
    }
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
              <AddressInputs />
            </div>
            <div className="mt-10 grid gap-y-5">
              <SubmitButton
                label={methods.formState.isSubmitting ? "送信中..." : "登録"}
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
