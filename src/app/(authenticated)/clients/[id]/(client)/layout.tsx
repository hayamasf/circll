import React from "react";
import getClientById from "@/utils/getClientById";
import { formatEntityName } from "@/utils/formatEntityName";
import Breadcrumbs from "@/components/Breadcrumbs";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import TabsNav from "@/components/TabsNav";

export default async function ClientLayout(props: {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}) {
  const params = await props.params;
  const id = Number(params.id);
  const client = await getClientById(id);

  if (!client) {
    return (
      <div className="mx-auto max-w-2xl py-5">
        該当の事業者が見つかりません...
      </div>
    );
  }

  const clientName = formatEntityName(client);

  const pages = [
    { name: "排出事業者", href: "/clients", current: false },
    { name: clientName, href: "", current: true },
  ];

  const tabs = [
    { name: "事業所", href: `/clients/${id}` },
    { name: "契約", href: `/clients/${id}/contracts` },
    { name: "JWNET情報", href: `/clients/${id}/jwnet` },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="py-6">
        <Breadcrumbs pages={pages} />
      </div>
      <LegalEntityProfile entity={client} />
      <div className="my-8">
        <TabsNav tabs={tabs} />
      </div>
      <div>{props.children}</div>
    </div>
  );
}
