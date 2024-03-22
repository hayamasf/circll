import React from "react";

import PageHeader from "@/components/PageHeader";
import ContractorForm from "@/components/ContractorForm";

export default function Page({ params }: { params: { type: string } }) {
  const type = params.type;

  return (
    <div className="mx-auto max-w-sm">
      <PageHeader title="業者の新規登録" />
      <ContractorForm type={type} />
    </div>
  );
}
