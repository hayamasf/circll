import React from "react";
import PageHeader from "@/components/PageHeader";
import getContractById from "@/utils/getContractById";
import IndustrialWasteContractDetail from "@/components/IndustrialWasteContractDetail";

export default async function Page(props: {
  params: Promise<{ type: string; id: number }>;
}) {
  const params = await props.params;
  const type = params.type;
  const id = Number(params.id);
  const contract = await getContractById(type, id);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex justify-between mb-8 items-center">
        <PageHeader title="契約内容" />
      </div>
      {contract ? (
        <IndustrialWasteContractDetail contract={contract} />
      ) : (
        "対象の契約が見つかりません."
      )}
    </div>
  );
}
