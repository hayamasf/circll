import React from "react";
import { prisma } from "@/lib/prisma";
import LegalEntityProfile from "@/components/LegalEntityProfile";

async function fetchClient(id: number) {
  try {
    const client = await prisma.client.findUnique({
      where: { id },
    });
    return client;
  } catch (error) {
    console.error("client fetch failed.", error);
    throw error;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const client = await fetchClient(id);

  if (client) {
    return (
      <LegalEntityProfile entity={client} />
    );
  } else {
    <div>データを取得中...</div>;
  }
}
