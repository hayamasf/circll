import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import fetchClientById from "@/utils/getClientById";
import { prisma } from "@/lib/prisma";
import PageHeader from "@/components/PageHeader";
import LinkButton from "@/components/LinkButton";
import SectionHeader from "@/components/SectionHeader";
import SitesList from "@/components/SitesList";

async function getSites(clientId: number) {
  const sites = await prisma.site.findMany({
    where: {
      clientId,
    },
  });
  return sites;
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  const client = await fetchClientById(id);
  const sites = await getSites(id);

  if (client) {
    return (
      <div className="mx-auto max-w-3xl">
        <PageHeader title="排出事業者の詳細" />
        <LegalEntityProfile entity={client} />
        <div className="flex my-10 items-center justify-between">
          <SectionHeader title={"事業所一覧"} />
          <LinkButton href={id + "/sites/register"}>事業所を登録</LinkButton>
        </div>
        {sites && <SitesList sites={sites} />}
      </div>
    );
  }
}
