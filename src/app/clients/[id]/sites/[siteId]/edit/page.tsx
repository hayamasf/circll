import React from "react";
import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import getSiteById from "@/utils/getSiteById";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteEditForm from "@/components/SiteEditForm";

export default async function Page({ params }: { params: { siteId: string } }) {
  const siteId = Number(params.siteId);
  const site = await getSiteById(siteId);

  if (!site) {
    return <div>該当の事業所がありません.</div>;
  }

  const clientName = `${site.client?.isPrefixEntityType ? site.client.entityType : ""}${site.client?.name}${site.client?.entityType && !site.client.isPrefixEntityType ? site.client.entityType : ""}`;

  const pages = [
    { name: "排出事業者", href: "/clients", current: false },
    { name: clientName, href: "/clients/" + site.clientId, current: false },
    { name: "事業所", href: "", current: false },
    {
      name: site.name,
      href: "/clients/" + site.clientId + "/sites/" + site.id,
      current: false,
    },
    { name: "編集", href: "", current: true },
  ];

  return (
    <div className="mx-auto max-w-lg">
      <div className="pt-3 pb-10">
        <Breadcrumbs pages={pages} />
      </div>
      {site && <SiteEditForm site={site} />}
    </div>
  );
}
