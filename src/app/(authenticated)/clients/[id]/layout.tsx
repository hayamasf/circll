import React from "react";
import getClientById from "@/utils/getClientById";
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

  const pages = [{ name: "排出事業者", href: "/clients", current: false }];

  const tabs = [
    { name: "事業所", href: `/clients/${id}` },
    { name: "JWNET情報", href: `/clients/${id}/jwnet` },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="py-6">
        <Breadcrumbs pages={pages} />
      </div>
      <LegalEntityProfile entity={client} />
      <div className="my-10">
        <TabsNav tabs={tabs} />
      </div>
      <div className="my-6">{props.children}</div>
    </div>
  );
}
