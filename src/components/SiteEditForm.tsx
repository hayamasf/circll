"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Site } from "@/types/types";
import SiteInputs from "./SiteInputs";
import AddressInputs from "./AddressInputs";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import { updateSite } from "@/actions/site";

export default function SiteEditForm({ site }: { site: Site }) {
  const methods = useForm({
    defaultValues: {
      name: site.name,
      postalCode: site.postalCode,
      prefecture: site.prefecture,
      city: site.city,
      town: site.town,
      address: site.address,
      address2: site.address2,
    },
  });

  const onSubmit = async (formData: any) => {
    console.log(formData);
    const result = await updateSite(formData);
  };

  return (
    <FormProvider {...methods}>
      <form className="mt-10" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-y-8">
          <SiteInputs />
          <AddressInputs />
          <SubmitButton label="送信" />
          <CancelButton label="キャンセル" onClick={() => methods.reset()} />
        </div>
      </form>
    </FormProvider>
  );
}
