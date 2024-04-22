import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import fetchClientById from "@/utils/getClientById";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/SectionHeader";
import SitesList from "@/components/SitesList";

async function getSites(clientId: number) {
  const sites = await prisma.site.findMany({
    where: {
      clientId,
    },
  });
  return sites;
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const client = await fetchClientById(id);
  const sites = await getSites(id);

  if (client) {
    return (
      <div className="mx-auto max-w-3xl">
        <LegalEntityProfile entity={client} />
        <div className="flex my-10 items-center justify-between">
          <SectionHeader title={"事業所一覧"} />
          <Link
            href={"/"}
            className="flex text-sm items-center hover:underline"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            事業所を追加
          </Link>
        </div>
        {sites && <SitesList sites={sites} />}
      </div>
    );
  }
}
