import React from "react";
import PageHeader from "@/components/PageHeader";
import SiteRegistrationForm from "@/components/SiteRegistrationForm";

export default function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id)

  return (
    <div className="mx-auto max-w-md">
      <PageHeader title="事業所の登録" />
      <SiteRegistrationForm id={id} />
    </div>
  )
}
