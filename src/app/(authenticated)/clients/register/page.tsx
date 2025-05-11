import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LegalEntityRegistrationForm from "@/components/LegalEntityRegistrationForm";

export default function Page() {
  const pages = [
    { name: "排出事業者", href: "/clients", current: false },
    { name: "登録", href: "", current: true },
  ];

  return (
    <div className="bg-white px-3 mx-auto max-w-lg">
      <div className="pt-3 pb-10">
        <Breadcrumbs pages={pages} />
      </div>
      <LegalEntityRegistrationForm entity={"client"} />
    </div>
  );
}
