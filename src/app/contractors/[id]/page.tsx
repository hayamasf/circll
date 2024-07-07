import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import fetchContractorById from "@/utils/fetchContractorById";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const contractor = await fetchContractorById(id);

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title="業者の詳細" />
      {contractor ? (
        <>
          <LegalEntityProfile entity={contractor} />
          <Link href={"./" + contractor.id + "/licenses"} >許可証一覧</Link>
        </>
      ) : (
        "該当する業者が見つかりません..."
      )}
    </div>
  );
}
