import React from "react";
import { prisma } from "@/lib/prisma";
import PageHeader from "@/components/PageHeader";
import LinkButton from "@/components/LinkButton";
import LegalEntitiesList from "@/components/LegalEntitiesList";

export default async function Page() {
  const clients = await prisma.client.findMany();

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="排出事業者" />
        <LinkButton href="/clients/register">新規登録</LinkButton>
      </div>
      <LegalEntitiesList entities={clients} path={"clients"} />
    </div>
  );
}
