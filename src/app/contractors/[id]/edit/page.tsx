import React from "react";
import PageHeader from "@/components/PageHeader";
import LegalEntityEditForm from "@/components/LegalEntityEditForm";
import getContractorById from "@/utils/getContractorById";
import { updateContractor } from "@/actions/contractor";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const contractor = await getContractorById(id);

  if (contractor) {
    return (
      <div className="container mx-auto max-w-md">
        <PageHeader title="業者情報の編集" />
        <LegalEntityEditForm entity={contractor} action={updateContractor} />
      </div>
    );
  }
}
