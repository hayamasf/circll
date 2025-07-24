import React from "react";
import SitesList from "@/components/SitesList";

export default async function Page(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const id = Number(params.id);
  const offset = Number(searchParams.offset ?? 1);
  const limit = Number(searchParams.limit ?? 10);

  return <SitesList offset={offset} limit={limit} clientId={id} />;
}
