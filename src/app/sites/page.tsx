import React from "react";
import PageHeader from "@/components/PageHeader";
import SitesList from "@/components/SitesList";
import { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const offset = Number(searchParams.offset ?? 1);
  const limit = Number(searchParams.limit ?? 10);

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="事業所" />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SitesList offset={offset} limit={limit} />
      </Suspense>
    </div>
  );
}
