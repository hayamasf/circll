import React from "react";
import getSiteById from "@/utils/getSiteById";
import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import SiteDetail from "@/components/SiteDetail";

export default async function Page({
  params,
}: {
  params: { id: string; siteId: string };
}) {
  const siteId = Number(params.siteId);

  let site;

  try {
    site = await getSiteById(siteId);
  } catch (error) {
    console.error("データ取得中にエラー: ", error);
    return <div>データの取得中にエラーが発生しました.</div>;
  }

  if (!site) {
    return <div>事業所の登録がありません.</div>;
  }

  const clientName = `${site.client?.isPrefixEntityType ? site.client.entityType : ""}${site.client?.name}${site.client?.entityType && !site.client.isPrefixEntityType ? site.client.entityType : ""}`;

  const pages = [
    { name: "排出事業者", href: "/clients", current: false },
    { name: clientName, href: "/clients/" + site.clientId, current: false },
    { name: "事業所", href: "", current: true },
  ];

  return (
    <div className="mx-auto max-w-lg">
      <div className="pt-3 pb-10">
        <Breadcrumbs pages={pages} />
      </div>
      <Card>
        <SiteDetail site={site} />
      </Card>
    </div>
  );
}
