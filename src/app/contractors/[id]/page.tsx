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

  const mswLicensesList = contractor
    ? [
        {
          title: "一般廃棄物処理業許可",
          content: <MswLicensesList contractorId={contractor?.id} />,
        },
      ]
    : [];

  const industrialWasteLicensesList = contractor
    ? [
        {
          title: "産業廃棄物処理業許可",
          content: <IndustrialWasteLicensesList contractorId={contractor.id} />,
        },
      ]
    : [];

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title="業者" />
      {contractor ? (
        <>
          <LegalEntityProfile entity={contractor} />
          <Accordion items={mswLicensesList} />
          <Accordion items={industrialWasteLicensesList} />
        </>
      ) : (
        "該当する業者が見つかりません..."
      )}
    </div>
  );
}
