import React from "react";
import getSiteById from "@/utils/getSiteById";
import { formatEntityName } from "@/utils/formatEntityName";
import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import SiteDetail from "@/components/SiteDetail";

export default async function Page(props: {
  params: Promise<{ ["site-id"]: string }>
}) {
  const params = await props.params;
  const siteId = Number(params["site-id"]);

  const site = await getSiteById(siteId);

  if (!site) {
    return <div className="mx-auto max-w-2xl">該当の事業所がありません...</div>
  }

  const client = site.client
  const clientName = client ? formatEntityName(client) : "不明な事業者";

  const pages = [
    { name: "排出事業者", href: "/clients", current: false },
    { name: clientName, href: "/clients/" + site.clientId, current: false },
    { name: site.name, href: "", current: false, },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mt-6 mb-10">
        <Breadcrumbs pages={pages} />
      </div>
      <Card>
        <SiteDetail site={site} />
      </Card>
    </div>
  )
}