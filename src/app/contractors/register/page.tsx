'use client'

import PageHeader from "@/components/PageHeader";
import ContractorForm from "@/components/ContractorForm";
import { ContractorFormValues } from "@/types/types";
import { createContractor } from "@/actions/contractor";

export default function Page() {
  const handleCreateContractor = (formData: ContractorFormValues) => {
    createContractor(formData)
  }
  return (
    <div className="mx-auto max-w-sm">
      <PageHeader title="業者の新規登録" />
      <ContractorForm onSubmit={handleCreateContractor} />
    </div>
  );

}
