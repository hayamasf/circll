import React from "react";
import { prisma } from "@/lib/prisma";
import LegalEntityProfile from "@/components/LegalEntityProfile";

async function fetchContractor(id: number) {
  try {
    const contractor = await prisma.contractor.findUnique({
      where: { id },
    });
    return contractor;
  } catch (error) {
    console.error("contractor fetch failed.");
    throw error;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const contractor = await fetchContractor(id);

  if (contractor) {
    return <LegalEntityProfile entity={contractor} />;
  } else {
    return <div>データを取得中...</div>;
  }
}
