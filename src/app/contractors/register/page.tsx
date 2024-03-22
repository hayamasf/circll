import React from "react";

import PageHeader from "@/components/PageHeader";
import LegalEntityTypeSelector from "@/components/LegalEntityTypeSelector";

export default function Page() {
  return (
    <div className="mx-auto max-w-sm">
      <PageHeader title="業者の新規登録" />
      <LegalEntityTypeSelector />
    </div>
  );
}
