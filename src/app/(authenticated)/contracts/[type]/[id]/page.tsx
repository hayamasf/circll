import React, { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import Loading from "@/app/loading";
import getContractById from "@/utils/getContractById";
import IndustrialWasteContractDetail from "@/components/IndustrialWasteContractDetail";
import getSitesByClientId from "@/utils/getSitesByClientId";
import ContractSitesForm from "@/components/ContractSitesForm";

export default async function Page(props: {
  params: Promise<{ type: string; id: number }>;
}) {
  const params = await props.params;
  const type = params.type;
  const id = Number(params.id);
  const contract = await getContractById(type, id);

  if (!contract || typeof contract === "string") {
    return <div>対象の契約が見つかりません.</div>;
  }

  const sites = await getSitesByClientId(contract.client.id);
  const selectedSiteIds = contract.sites?.map((site) => site.id) ?? [];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex justify-between mb-8 items-center">
        <PageHeader title="契約内容" />
      </div>
      <Suspense fallback={<Loading />}>
        {contract ? (
          <div className="grid gap-y-5">
            <IndustrialWasteContractDetail contract={contract} />
            <ContractSitesForm
              contractId={contract.id}
              sites={sites}
              selectedSiteIds={selectedSiteIds}
            />
          </div>
        ) : (
          "対象の契約が見つかりません."
        )}
      </Suspense>
    </div>
  );
}
