import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import fetchClientById from "@/utils/getClientById";
import PageHeader from "@/components/PageHeader";
import LinkButton from "@/components/LinkButton";
import SectionHeader from "@/components/SectionHeader";
import SitesList from "@/components/SitesList";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  const client = await fetchClientById(id);

  if (client) {
    return (
      <div className="mx-auto max-w-2xl">
        <PageHeader title="排出事業者の詳細" />
        <LegalEntityProfile entity={client} />
        <div className="flex my-10 items-center justify-between">
          <SectionHeader title={"事業所一覧"} />
          <LinkButton href={id + "/sites/register"}>事業所を登録</LinkButton>
        </div>
        <SitesList clientId={id} />
      </div>
    );
  }
}
