import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LegalEntityRegistrationForm from "@/components/LegalEntityRegistrationForm";

export default function Page() {
  const pages = [
    { name: '排出事業者', href: '/clients', current: false },
    { name: '登録', href: '', current: true },
  ]

  return (
    <div className="mx-auto max-w-sm">
      <Breadcrumbs pages={pages} />
      <LegalEntityRegistrationForm entity={"client"} />
    </div>
  );
}
