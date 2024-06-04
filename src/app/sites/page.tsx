
import React from "react";
import PageHeader from "@/components/PageHeader";
import SitesList from "@/components/SitesList";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="事業所" />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SitesList />
      </Suspense>
    </div>
  );
}
