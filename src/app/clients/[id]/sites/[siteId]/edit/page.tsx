import React from "react";
import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import getClientById from "@/utils/getClientById";
import getSiteById from "@/utils/getSiteById";
import SiteEditForm from "@/components/SiteEditForm";

export default async function Page({
  params,
}: {
  params: { id: string; siteId: string };
}) {
  const clientId = Number(params.id);
  const client = await getClientById(clientId);

  const siteId = Number(params.siteId);
  const site = await getSiteById(siteId);

  return (
    <div className="mx-auto max-w-lg">
      <PageHeader title="事業所情報の編集" />
      {client && (
        <div className="py-5 text-xs text-gray-800">
          <Link
            href={"/clients/" + client.id}
            className="font-bold text-base hover:underline"
          >
            {client.isPrefixEntityType ? client.entityType : ""}
            {client.name}
            {!client.isPrefixEntityType ? client.entityType : ""}
          </Link>
          の事業所
        </div>
      )}
      {site && <SiteEditForm site={site} />}
    </div>
  );
}
