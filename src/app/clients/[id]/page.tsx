import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import fetchClientById from "@/utils/fetchClientById";
import LinkButton from "@/components/LinkButton";
import { PlusIcon } from "@heroicons/react/24/outline";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const client = await fetchClientById(id);

  if (client) {
    return (
      <div className="mx-auto max-w-3xl">
        <LegalEntityProfile entity={client} />
        <LinkButton children={"事業所を登録"} Icon={PlusIcon} href={`./${id}/sites/register`} />
      </div>
    );
  }
}
