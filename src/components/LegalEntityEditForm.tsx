"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

import { LegalEntity } from "@/types/types";
import CorporateEntityInputs from "./CorporateEntityInputs";
import SoleProprietorInputs from "./SoleProprietorInputs";
import AddressInputs from "./AddressInputs";

export default function LegalEntityEditForm({
  entity,
  action,
}: {
  entity: LegalEntity;
  action: (FormData: LegalEntity) => Promise<{ success: boolean; message: string; }>
  // action: (formData: LegalEntity) => Promise<void>;
}) {
  const {
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isDirty },
    setValue,
    unregister,
  } = useForm<LegalEntity>({
    defaultValues: {
      id: entity.id,
      entityType: entity.entityType,
      isPrefixEntityType: entity.isPrefixEntityType,
      name: entity.name,
      title: entity.title,
      representative: entity.representative,
      tradeName: entity.tradeName,
      zipCode: entity.zipCode,
      prefecture: entity.prefecture,
      city: entity.city,
      town: entity.town,
      address: entity.address,
      address2: entity.address2,
    },
  });

  useEffect(() => {
    if (entity.entityType) {
      unregister("tradeName");
    } else {
      unregister("entityType");
      unregister("isPrefixEntityType");
      unregister("title");
      unregister("representative");
    }
  }, [entity.entityType, unregister]);

  const onSubmit = async (formData: LegalEntity) => {
    try {
      await action(formData);
      console.log(formData);
    } catch (error) {
      console.error("データ更新時にエラーが発生しました.", error);
    }
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-y-8">
        {entity.entityType ? (
          <CorporateEntityInputs register={register} errors={errors} />
        ) : (
          <SoleProprietorInputs register={register} errors={errors} />
        )}
        <hr className="my-2" />
        <AddressInputs
          register={register}
          errors={errors}
          setValue={setValue}
        />
      </div>
      <div className="mt-10 grid gap-y-5">
        <SubmitButton label="登録" disabled={!isDirty} />
        <CancelButton label="キャンセル" onClick={() => reset()} />
      </div>
    </form>
  );
}
