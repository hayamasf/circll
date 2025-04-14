import React from "react";
import PageHeader from "@/components/PageHeader";
import Loading from "../loading";
import { Suspense } from "react";
import ContractorsList from "@/components/ContractorsList";
import PlusIconDropdownMenu from "@/components/PlusIconDropdownMenu";

export default async function Page(
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) {
  const searchParams = await props.searchParams;
  const offset = Number(searchParams.offset ?? 1);
  const limit = Number(searchParams.limit ?? 10);

  const menuItems = [
    {
      id: 1,
      href: "/contractors/register?type=corporate",
      text: "会社など法人",
    },
    {
      id: 2,
      href: "/contractors/register?type=sole-proprietor",
      text: "個人事業者",
    },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="業者" />
        <PlusIconDropdownMenu menuItems={menuItems} />
      </div>
      <Suspense fallback={<Loading />}>
        <ContractorsList offset={offset} limit={limit} />
      </Suspense>
    </div>
  );
}
