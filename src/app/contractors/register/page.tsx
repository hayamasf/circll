import React from "react";
import LegalEntityRegistrationForm from "@/components/LegalEntityRegistrationForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Page() {
  const pages = [
    { name: '業者', href: '/contractors', current: false },
    { name: '新規登録', href: '', current: true },
  ]

  return (
    <div className="mx-auto max-w-sm">
      <Breadcrumbs pages={pages} />
      <LegalEntityRegistrationForm entity="contractor" />
    </div>
  );
}
