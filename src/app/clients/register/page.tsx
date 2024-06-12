import React from "react";
import PageHeader from "@/components/PageHeader";
import LegalEntityRegistrationForm from "@/components/LegalEntityRegistrationForm";
import { createClient } from "@/actions/client";

export default function Page() {
  return (
    <div className="mx-auto max-w-sm">
      <PageHeader title="排出事業者の登録" />
      <LegalEntityRegistrationForm action={createClient} />
    </div>
  );
}
