"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import { useRouter } from "next/navigation";

import { LegalEntityFormData } from "@/schemas/legalEntitySchema";
import CorporateEntityInputs from "./CorporateEntityInputs";
import SoleProprietorInputs from "./SoleProprietorInputs";
import AddressInputs from "./AddressInputs";
import { Client, Contractor } from "@prisma/client";

export default function LegalEntityEditForm({
  entity,
  action,
}: {
  entity: Client | Contractor;
  action: (
    formData: Partial<Client | Contractor>,
  ) => Promise<{ success: boolean; message: string }>;
}) {
  const router = useRouter();

  const methods = useForm<LegalEntityFormData>({
    defaultValues: {
      id: entity.id,
      entityType: entity.entityType,
      isPrefixEntityType: entity.isPrefixEntityType ?? null,
      name: entity.name,
      representativeTitle: entity.representativeTitle,
      representativeName: entity.representativeName,
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
    const dirtyFields = methods.formState.dirtyFields;
    const values = methods.getValues();
    const dirtyFieldValues: Record<string, any> = {};

    (Object.keys(dirtyFields) as Array<keyof LegalEntityFormData>).forEach((key) => {
      if (dirtyFields[key]) {
        dirtyFieldValues[key] = values[key];
      }
    })
    return dirtyFieldValues;
  };

  const onSubmit = async () => {
    try {
      const dirtyData = getDirtyFieldValues();
      const formData = { ...dirtyData, id: Number(entity.id) };
      const result = await action(formData);

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
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-y-8">
          {entity.entityType ? (
            <CorporateEntityInputs />
          ) : (
            <SoleProprietorInputs />
          )}
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
