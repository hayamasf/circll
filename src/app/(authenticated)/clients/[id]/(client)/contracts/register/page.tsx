import React from "react";
import getClientById from "@/utils/getClientById";
import ClientContractReistrationForm from "@/components/ClientContractRegistrationForm";
import getContractors from "@/utils/getContractors";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const client = await getClientById(id);
  const contractors = await getContractors();

  if (!client) {
    return (
      <div className="mx-auto max-w-2xl">該当の事業者が見つかりません...</div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      <ClientContractReistrationForm
        clientId={id}
        contractors={contractors}
        waste="waste"
        type="type"
      />
    </div>
  );
}
