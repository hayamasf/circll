"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Site } from "@/types/types";
import SiteInputs from "./SiteInputs";
import AddressInputs from "./AddressInputs";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import { updateSite } from "@/actions/site";

export default function SiteEditForm({ site }: { site: Site }) {
  const methods = useForm<Site>({
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

  const router = useRouter();

  const getDirtyFieldValues = () => {
    const dirtyFieldValues: Partial<Site> = {};

    Object.keys(methods.formState.dirtyFields).forEach((fieldName) => {
      if (methods.formState.dirtyFields[fieldName]) {
        dirtyFieldValues[fieldName] = methods.getValues(fieldName);
      }
    });
    return dirtyFieldValues;
  };

  const onSubmit = async () => {
    try {
      const dirtyData = getDirtyFieldValues();
      const data = { ...dirtyData, id: Number(site.id) };
      console.log(data);
      const result = await updateSite(data);

      if (result.success) {
        console.log(result.message);
        router.push("./");
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("データ更新時にエラーが発生しました.", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-y-8">
          <SiteInputs />
          <AddressInputs />
          <SubmitButton label="送信" disabled={!methods.formState.isDirty} />
          <CancelButton label="キャンセル" onClick={() => methods.reset()} />
        </div>
      </form>
    </FormProvider>
  );
}
