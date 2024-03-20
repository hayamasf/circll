"use client";

import React from "react";
import { useForm } from "react-hook-form";

import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

import { LegalEntity } from "@/types/types";
import LegalEntitySelector from "./LegalEntitySelector";
import AddressInputs from "./AddressInputs";

import { createContractor } from "@/actions/contractor";

export default function ContractorForm() {
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
      zipCode: "",
      prefecture: "",
      city: "",
      town: "",
      address: "",
      address2: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    createContractor(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="grid gap-y-8">
        <LegalEntitySelector
          register={register}
          errors={errors}
          unregister={unregister}
        />
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
