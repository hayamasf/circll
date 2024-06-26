"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import { useRouter } from "next/navigation";

import { LegalEntity } from "@/types/types";
import CorporateEntityInputs from "./CorporateEntityInputs";
import SoleProprietorInputs from "./SoleProprietorInputs";
import AddressInputs from "./AddressInputs";

export default function LegalEntityEditForm({
  entity,
  action,
}: {
  entity: LegalEntity;
  action: (
    data: Partial<LegalEntity>,
  ) => Promise<{ success: boolean; message: string }>;
  // action: (formData: LegalEntity) => Promise<void>;
}) {
  const router = useRouter();

  const methods = useForm<LegalEntity>({
    defaultValues: {
      id: entity.id,
      entityType: entity.entityType,
      isPrefixEntityType: entity.isPrefixEntityType,
      name: entity.name,
      title: entity.title,
      representative: entity.representative,
      tradeName: entity.tradeName,
      postalCode: entity.postalCode,
      prefecture: entity.prefecture,
      city: entity.city,
      town: entity.town,
      address: entity.address,
      address2: entity.address2,
    },
  });

  const getDirtyFieldValues = () => {
    const dirtyFieldValues: Record<string, string> = {};
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
      const data = { ...dirtyData, id: Number(entity.id) };
      const result = await action(data);

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
      <form className="mt-10" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-y-8">
          {entity.entityType ? (
            <CorporateEntityInputs />
          ) : (
            <SoleProprietorInputs />
          )}
          <hr className="my-2" />
          <AddressInputs />
        </div>
        <div className="mt-10 grid gap-y-5">
          <SubmitButton label="登録" disabled={!methods.formState.isDirty} />
          <CancelButton label="キャンセル" onClick={() => methods.reset()} />
        </div>
      </form>
    </FormProvider>
  );
}
