"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import LegalEntityTypeSelector from "@/components/LegalEntityTypeSelector";
import LegalEntityRegistrationForm from "@/components/LegalEntityRegistrationForm";
import { LegalEntity } from "@/types/types";
import { createContractor } from "@/actions/contractor";

export default function Page() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as "corporate" | "sole-proprietor";

  const onSubmit = (formData: LegalEntity) => {
    const { address2, tradeName, ...rest } = formData;

    const data = {
      ...rest,
      ...(address2 ? { address2 } : {}),
      ...(tradeName ? { tradeName } : {}),
    };

    console.log(data);
    createContractor(data);
  };

  return (
    <div className="mx-auto max-w-sm">
      <PageHeader title="業者の新規登録" />
      <LegalEntityTypeSelector />
      {type && <LegalEntityRegistrationForm type={type} onSubmit={onSubmit} />}
    </div>
  );
}
