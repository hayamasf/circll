import React from "react";
import PageHeader from "@/components/PageHeader";
import getSiteById from "@/utils/getSiteById";

export default async function Page({ params }: { params: { siteId: string } }) {
  const siteId = Number(params.siteId);
  const site = await getSiteById(siteId);

  return (
    <div className="mx-auto max-w-lg">
      <PageHeader title="事業所情報の編集" />
      {siteId}
    </div>
  );
}
