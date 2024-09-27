import React from "react";
import LegalEntityEditForm from "@/components/LegalEntityEditForm";
import getContractorById from "@/utils/getContractorById";
import { updateContractor } from "@/actions/contractor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const contractor = await getContractorById(id);
  const contractorName = `${contractor?.isPrefixEntityType ? contractor.entityType : ""}${contractor?.name}${contractor?.entityType && !contractor.isPrefixEntityType ? contractor.entityType : ""}`;

  const pages = [
    { name: "業者", href: "/contractors", current: false },
    { name: contractorName, href: "/contractors/" + contractor?.id, current: false },
    { name: "編集", href: "", current: true },
  ];

  if (!contractor) {
    return <div>業者が見つかりません.</div>
  }

  return (
    <div className="mx-auto max-w-lg">
      <Suspense fallback={<Loading />}>
        <div className="pt-3 pb-10">
          <Breadcrumbs pages={pages} />
        </div>
        <LegalEntityEditForm entity={contractor} action={updateContractor} />
      </Suspense>
    </div>
  );
}
