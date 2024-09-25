import React from "react";
import LegalEntityEditForm from "@/components/LegalEntityEditForm";
import getClientById from "@/utils/getClientById";
import Breadcrumbs from "@/components/Breadcrumbs";
import { updateClient } from "@/actions/client";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const client = await getClientById(id);

  const clientName = `${client?.isPrefixEntityType ? client.entityType : ""}${client?.name}${client?.entityType && !client.isPrefixEntityType ? client.entityType : ""}`;
  const pages = [{ name: "排出事業者", href: "/clients", current: false },
  { name: clientName, href: "/clients/" + client?.id, current: false },
  { name: "編集", href: "", current: true }
  ];

  if (client) {
    return (
      <div className="mx-auto max-w-lg">
        <div className="pt-3 pb-10">
          <Breadcrumbs pages={pages} />
        </div>
        <LegalEntityEditForm entity={client} action={updateClient} />
      </div>
    );
  }
}
