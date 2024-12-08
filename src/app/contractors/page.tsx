import React from "react";
import PageHeader from "@/components/PageHeader";
import Loading from "../loading";
import { Suspense } from "react";
import ContractorsList from "@/components/ContractorsList";
import LinkToRegister from "@/components/LinkToRegister";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const offset = Number(searchParams.offset ?? 1);
  const limit = Number(searchParams.limit ?? 10);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="業者" />
        <LinkToRegister href={"/contractors/register"} />
      </div>
      <Suspense fallback={<Loading />}>
        <ContractorsList offset={offset} limit={limit} />
      </Suspense>
    </div>
  );
}
