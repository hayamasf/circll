import React from "react";
import SitesList from "@/components/SitesList";
import { Suspense } from "react";

import PageHeader from "@/components/PageHeader";

export default async function page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const offset = Number(searchParams.offset ?? 1);
  const limit = Number(searchParams.limit ?? 10);

  return (
    <div className="bg-white px-3 mx-auto max-w-2xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="排出事業所" />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SitesList offset={offset} limit={limit} />
      </Suspense>
    </div>
  );
}
