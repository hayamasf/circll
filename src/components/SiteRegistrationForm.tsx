"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { createSite } from "@/actions/site";
import { Site } from "@/types/types";

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

    console.log(data);
    const result = await createSite(data);
  };

  return (
    <FormProvider {...methods}>
      <form className="mt-10" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-y-8">
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              事業所名
            </label>
            <input
              type="text"
              id="name"
              {...methods.register("name", { required: "事業所名は必須です" })}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
              placeholder="東京中央営業所"
            />
            {methods.formState.errors.name?.message && (
              <p className="text-xs text-red-500 p-1">
                {methods.formState.errors.name?.message}
              </p>
            )}
          </div>
          <AddressInputs />
          <SubmitButton label="登録" />
          <CancelButton label="キャンセル" onClick={() => methods.reset()} />
        </div>
      </form>
    </FormProvider>
  );
}
