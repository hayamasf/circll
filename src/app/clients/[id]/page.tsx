import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import fetchClientById from "@/utils/fetchClientById";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const client = await fetchClientById(id);

  if (client) {
    return <LegalEntityProfile entity={client} />;
  } else {
    <div>データを取得中...</div>;
  }
}
