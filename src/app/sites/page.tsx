import React from "react";
import { prisma } from "@/lib/prisma";
import PageHeader from "@/components/PageHeader";
import SitesList from "@/components/SitesList";
import { Suspense } from "react";

async function getSites() {
  const sites = await prisma.site.findMany();
  return sites;
}

export default async function Page() {
  const sites = await getSites();

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="事業所" />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SitesList sites={sites} />
      </Suspense>
    </div>


  )

}