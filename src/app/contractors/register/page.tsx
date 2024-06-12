import React from "react";
import PageHeader from "@/components/PageHeader";
import LegalEntityRegistrationForm from "@/components/LegalEntityRegistrationForm";
import { createContractor } from "@/actions/contractor";

export default function Page() {
  return (
    <div className="mx-auto max-w-sm">
      <PageHeader title="業者の新規登録" />
      <LegalEntityRegistrationForm action={createContractor} />
    </div>
  );
}
