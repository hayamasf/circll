import React from "react";
import { prisma } from "@/lib/prisma";
import PageHeader from "@/components/PageHeader";
import LinkButton from "@/components/LinkButton";
import LegalEntitiesList from "@/components/LegalEntitiesList";
import { Suspense } from "react";

async function getContractors() {
  await new Promise(resolve => setTimeout(resolve, 3000))

  const contractors = await prisma.contractor.findMany();
  return contractors;
}

export default async function Page() {
  const contractors = await getContractors();

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="業者" />
        <LinkButton href="/contractors/register">新規登録</LinkButton>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <LegalEntitiesList entities={contractors} path={"contractors"} />
      </Suspense>
    </div>
  );
}
