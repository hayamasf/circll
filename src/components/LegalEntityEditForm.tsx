"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

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
  const params = useParams<{ id: string }>();
  const id = params.id;

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

  const getDirtyFieldValues = () => {
    const dirtyFieldValues: Record<string, string> = {};
    Object.keys(dirtyFields).forEach((fieldName) => {
      if (dirtyFields[fieldName]) {
        dirtyFieldValues[fieldName] = getValues(fieldName);
      }
    });

    return dirtyFieldValues;
  };

  const onSubmit = async () => {
    try {
      const dirtyData = getDirtyFieldValues();
      const data = { ...dirtyData, id: Number(id) };
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
