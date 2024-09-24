import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import getClientById from "@/utils/getClientById";
import PageHeader from "@/components/PageHeader";
import LinkButton from "@/components/LinkButton";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import SitesList from "@/components/SitesList";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = Number(params.id);
  const client = await getClientById(id);
  const pages = [{ name: "排出事業者", href: "/clients", current: true }];

  const offset = Number(searchParams.offset ?? 1);
  const limit = Number(searchParams.limit ?? 10);

  if (client) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="pt-3 pb-10">
          <Breadcrumbs pages={pages} />
        </div>
        <LegalEntityProfile entity={client} />
        <div className="flex my-10 items-center justify-between">
          <SectionHeader title={"事業所一覧"} />
          <LinkButton href={id + "/sites/register"}>事業所を登録</LinkButton>
        </div>
        <SitesList clientId={id} offset={offset} limit={limit} />
      </div>
    );
  }
}
