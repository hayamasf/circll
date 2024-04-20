import React from "react";
import getSiteById from "@/utils/getSiteById";

export default async function Page({
  params,
}: {
  params: { id: string; siteId: string };
}) {
  const id = Number(params.id);
  const siteId = Number(params.siteId);

  const site = await getSiteById(siteId);

  return <div>{site?.name}</div>;
}
