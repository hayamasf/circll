import React from "react";
import PageHeader from "@/components/PageHeader";
import LegalEntityEditForm from "@/components/LegalEntityEditForm";
import fetchClientById from "@/utils/fetchClientById";
import { updateClient } from "@/actions/client";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const client = await fetchClientById(id);

  if (client) {
    return (
      <div className="container mx-auto max-w-md">
        <PageHeader title="顧客情報の編集" />
        <LegalEntityEditForm entity={client} action={updateClient} />
      </div>
    );
  }
}
