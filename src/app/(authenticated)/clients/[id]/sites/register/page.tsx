import React from "react";
import getClientById from "@/utils/getClientById";
import { formatEntityName } from "@/utils/formatEntityName";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteRegistrationForm from "@/components/SiteRegistrationForm";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const id = Number(params.id);
  const client = await getClientById(id)

  if (!client) {
    return (
      <div className="mx-auto max-w-2xl py-5">
        該当の事業者が見つかりません...
      </div>
    )
  }

  const clientName = formatEntityName(client)

  const pages = [
    { name: "排出事業者", href: "/clients", current: false },
    { name: clientName, href: "/clients/" + client?.id, current: false },
    { name: "事業所", href: "", current: false },
    { name: "登録", href: "", current: true },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mt-6 mb-10">
        <Breadcrumbs pages={pages} />
      </div>
      <div className="mx-auto max-w-lg">
        <SiteRegistrationForm id={id} />
      </div>
    </div>
  )


}