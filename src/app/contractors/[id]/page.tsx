import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import fetchContractorById from "@/utils/fetchContractorById";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const contractor = await fetchContractorById(id);

  if (contractor) {
    return <LegalEntityProfile entity={contractor} />;
  } else {
    return <div>データを取得中...</div>;
  }
}
