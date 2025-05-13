import React from "react";
import getClientById from "@/utils/getClientById";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteRegistrationForm from "@/components/SiteRegistrationForm";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const client = await getClientById(id);
  const clientName = `${client?.isPrefixEntityType ? client.entityType : ""}${client?.name}${client?.entityType && !client.isPrefixEntityType ? client.entityType : ""}`;

  const pages = [
    { name: "排出事業者", href: "/clients", current: false },
    { name: clientName, href: "/clients/" + client?.id, current: false },
    { name: "事業所", href: "", current: false },
    { name: "登録", href: "", current: true },
  ];

  if (!client) {
    return <div className="text-center">排出事業者が見当たりません.</div>;
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="pt-3 pb-10">
        <Breadcrumbs pages={pages} />
      </div>
      <SiteRegistrationForm id={client.id} />
    </div>
  );
}
