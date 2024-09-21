import React from "react";
import Link from "next/link";
import getClientById from "@/utils/getClientById";
import getSiteById from "@/utils/getSiteById";
import PageHeader from "@/components/PageHeader";
import SiteDetail from "@/components/SiteDetail";
import CardWithHeader from "@/components/CardWithHeader";

export default async function Page({
  params,
}: {
  params: { id: string; siteId: string };
}) {
  const clientId = Number(params.id);
  const siteId = Number(params.siteId);

  let client, site;

  try {
    client = await getClientById(clientId);
    site = await getSiteById(siteId);
  } catch (error) {
    console.error("データ取得中にエラー: ", error);
    return <div>データの取得中にエラーが発生しました.</div>;
  }

  if (!client) {
    return <div>排出事業者が登録されていません.</div>;
  }
  if (!site) {
    return <div>事業所の登録がありません.</div>;
  }
  return (
    <div className="mx-auto max-w-lg">
      <PageHeader title={"事業所"} />
      <CardWithHeader
        header={
          <Link
            href={"/clients/" + client.id}
            className="font-bold text-base hover:underline"
          >
            {client.isPrefixEntityType ? client.entityType : ""}
            {client.name}
            {!client.isPrefixEntityType ? client.entityType : ""}
          </Link>
        }
      >
        <SiteDetail site={site} />
      </CardWithHeader>
    </div>
  );
}
