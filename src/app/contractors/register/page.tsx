import React from "react";
import LegalEntityRegistrationForm from "@/components/LegalEntityRegistrationForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Page() {
  const pages = [
    { name: "業者", href: "/contractors", current: false },
    { name: "登録", href: "", current: true },
  ];

  return (
    <div className="mx-auto max-w-lg">
      <div className="pt-3 pb-10">
        <Breadcrumbs pages={pages} />
      </div>
      <LegalEntityRegistrationForm entity="contractor" />
    </div>
  );
}
