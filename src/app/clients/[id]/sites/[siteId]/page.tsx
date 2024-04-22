import React from "react";
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
    return <div>事業所の登録がありません.</div>
  } else {
    return (
      <div className="mx-auto max-w-xl">
        <PageHeader title={"事業所情報"} />
        <div>{client.name}</div>

        <div className="my-10">
          <SiteDetail site={site} />
        </div>
      </div>
    );
  }
}
