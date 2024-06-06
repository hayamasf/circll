"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { createSite } from "@/actions/site";
import { Site } from "@/types/types";

import SiteInputs from "./SiteInputs";
import AddressInputs from "./AddressInputs";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

export default function SiteRegistrationForm({ id }: { id: number }) {
  const methods = useForm<Site>({
    defaultValues: {
      clientId: id,
      name: "",
      postalCode: "",
      prefecture: "",
      city: "",
      town: "",
      address: "",
      address2: "",
    },
  });

  const onSubmit = async (formData: Site) => {
    const { address2, ...rest } = formData;

    const data = {
      ...rest,
      ...(address2 ? { address2 } : {}),
    };
    const result = await createSite(data);
  };

  return (
    <FormProvider {...methods}>
      <form className="mt-10" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-y-8">
          <SiteInputs />
          <AddressInputs />
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
