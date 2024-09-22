import React from "react";
import PageHeader from "@/components/PageHeader";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import fetchContractorById from "@/utils/fetchContractorById";
import Accordion from "@/components/Accordion";
import MswLicensesList from "@/components/MswLicensesList";
import IndustrialWasteLicensesList from "@/components/IndustrialWasteLicensesList";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const contractor = await fetchContractorById(id);

  const accordionItems = contractor ? [
    { title: "一般廃棄物処理業許可", content: <MswLicensesList contractorId={contractor?.id} /> }
  ] : [];

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title="業者" />
      {contractor ? (
        <>
          <LegalEntityProfile entity={contractor} />
          <Accordion items={accordionItems} />
          <IndustrialWasteLicensesList contractorId={contractor.id} />
        </>
      ) : (
        "該当する業者が見つかりません..."
      )}
    </div>
  );
}
