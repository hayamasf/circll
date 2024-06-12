"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import LegalEntityTypeSelector from "@/components/LegalEntityTypeSelector";
import LegalEntityRegistrationForm from "@/components/LegalEntityRegistrationForm";
import { createClient } from "@/actions/client";

export default function Page() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as "corporate" | "sole-proprietor";

  return (
    <div className="mx-auto max-w-sm">
      <PageHeader title="排出事業者の登録" />
      <LegalEntityTypeSelector />
      {type && (
        <LegalEntityRegistrationForm type={type} action={createClient} />
      )}
    </div>
  );
}
