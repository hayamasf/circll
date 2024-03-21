"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import PageHeader from "@/components/PageHeader";
import ContractorForm from "@/components/ContractorForm";
import LegalEntityTypeSelector from "@/components/LegalEntityTypeSelector";

export default function Page() {
  const searchParams = useSearchParams();
  let type = searchParams.get("type");

  let formContent;

  if (!type) {
    formContent = <LegalEntityTypeSelector />;
  } else if ((type = "corporate")) {
    formContent = <ContractorForm />;
  }

  return (
    <div className="mx-auto max-w-sm">
      <PageHeader title="業者の新規登録" />
      {formContent}
    </div>
  );
}
