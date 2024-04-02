import React from "react";
import PageHeader from "@/components/PageHeader";
import LegalEntityEditForm from "@/components/LegalEntityEditForm";
import { LegalEntity } from "@/types/types";
import { fetchClient } from "@/actions/client";
import { updateClient } from "@/actions/client";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const client = await fetchClient(id);

  if (client) {
    return (
      <div className="container mx-auto max-w-md">
        <PageHeader title="顧客情報の編集" />
        <LegalEntityEditForm entity={client} action={updateClient} />
      </div>
    );
  } else {
    return <div>データ取得中...</div>;
  }
}
