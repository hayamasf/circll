"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

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
  type: string;
  onSubmit: (formData: LegalEntity) => void;
}) {
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<LegalEntity>({
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

  useEffect(() => {
    if (type === "corporate") {
      unregister("tradeName");
    } else if (type === "sole-proprietor") {
      unregister("entityType");
      unregister("isPrefixEntityType");
      unregister("title");
      unregister("representative");
    }
  }, [type, unregister]);

  let legalEntityInputs;

  if (type === "corporate") {
    legalEntityInputs = (
      <CorporateEntityInputs register={register} errors={errors} />
    );
  } else if (type === "sole-proprietor") {
    legalEntityInputs = (
      <SoleProprietorInputs register={register} errors={errors} />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="grid gap-y-8">
        {legalEntityInputs}
        <hr className="my-2" />
        <AddressInputs
          register={register}
          errors={errors}
          setValue={setValue}
        />
      </div>
      <div className="mt-10 grid gap-y-5">
        <SubmitButton label="登録" />
        <CancelButton label="キャンセル" onClick={() => reset()} />
      </div>
    </form>
  );
}
