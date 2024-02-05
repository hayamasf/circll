'use client'

import PageHeader from "@/components/PageHeader";
import ContractorForm from "@/components/ContractorForm";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ContractorFormValues } from "@/types/types";
import { createContractor } from "@/actions/contractor";

export default function Page() {

  const { user } = useUser()
  const userId = user?.sub || ''

  const handleCreateContractor = (formData: ContractorFormValues) => {
    createContractor(formData)
  };

  if (userId) {
    return (
      <div className="mx-auto max-w-sm">
        <PageHeader title="業者の新規登録" />
        <ContractorForm onSubmit={handleCreateContractor} userId={userId} />
      </div>
    );

  }

  return 'loading...'

}
