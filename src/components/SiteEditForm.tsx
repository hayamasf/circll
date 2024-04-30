"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Site } from "@/types/types";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

export default function SiteEditForm() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="mt-10">
        <div className="grid gap-y-8">
          <SubmitButton label="送信" />
          <CancelButton label="キャンセル" onClick={() => methods.reset()} />
        </div>
      </form>
    </FormProvider>
  )

}