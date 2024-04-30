import React from "react";
import Link from "next/link";
import getClientById from "@/utils/getClientById";
import getSiteById from "@/utils/getSiteById";
import PageHeader from "@/components/PageHeader";
import SiteDetail from "@/components/SiteDetail";

export default async function Page({
  params,
}: {
  params: { id: string; siteId: string };
}) {
  const clientId = Number(params.id);
  const siteId = Number(params.siteId);
  const client = await getClientById(clientId);

  const site = await getSiteById(siteId);

  if (!client) {
    return <div>排出事業者が登録されていません.</div>;
  } else if (!site) {
    return <div>事業所の登録がありません.</div>;
  } else {
    return (
      <div className="mx-auto max-w-xl">
        <PageHeader title={"事業所情報"} />
        <div className="my-3 bg-gray-50 rounded-md px-4 py-5 sm:px-6 text-sm text-gray-800">
          <Link
            href={"/clients/" + client.id}
            className="font-bold text-base hover:underline"
          >
            {client.isPrefixEntityType && client.entityType}
            {client.name}
            {client.entityType &&
              !client.isPrefixEntityType &&
              client.entityType}
          </Link>
          の事業所
        </div>
        <div className="my-3">
          <SiteDetail site={site} />
        </div>
      </div>
    );
  }
}
