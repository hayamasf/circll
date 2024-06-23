import React from "react";
import PageHeader from "@/components/PageHeader";
import LinkButton from "@/components/LinkButton";
import Loading from "../loading";
import { Suspense } from "react";
import ContractorsList from "@/components/ContractorsList";

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
        <PageHeader title="業者" />
        <LinkButton href="/contractors/register">新規登録</LinkButton>
      </div>
      <Suspense fallback={<Loading />}>
        <ContractorsList offset={offset} limit={limit} />
      </Suspense>
    </div>
  );
}
