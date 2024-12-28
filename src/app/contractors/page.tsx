import React from "react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Loading from "../loading";
import { Suspense } from "react";
import ContractorsList from "@/components/ContractorsList";
import { PlusIcon } from "@heroicons/react/24/outline";

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
        <Link
          href={"/contractors/register"}
          className="flex gap-x-2 items-center text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100"
        >
          <PlusIcon className="h-4 w-4 text-gray-500" />

          <span className="text-sm font-semibold">登録する</span>
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <ContractorsList offset={offset} limit={limit} />
      </Suspense>
    </div>
  );
}
