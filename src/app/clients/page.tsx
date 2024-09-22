import React from "react";
import PageHeader from "@/components/PageHeader";
import LinkButton from "@/components/LinkButton";
import { Suspense } from "react";
import Loading from "../loading";
import ClientsList from "@/components/ClientsList";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const offset = Number(searchParams.offset ?? 1);
  const limit = Number(searchParams.limit ?? 10);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="排出事業者" />
        <LinkButton href="/clients/register">新規登録</LinkButton>
      </div>
      <Suspense fallback={<Loading />}>
        <ClientsList offset={offset} limit={limit} />
      </Suspense>
    </div>
  );
}
