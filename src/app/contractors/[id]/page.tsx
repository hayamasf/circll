import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import getContractorById from "@/utils/getContractorById";
import Breadcrumbs from "@/components/Breadcrumbs";
import Accordion from "@/components/Accordion";
import MswLicensesList from "@/components/MswLicensesList";
import IndustrialWasteLicensesList from "@/components/IndustrialWasteLicensesList";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const contractor = await getContractorById(id);

  const pages = [
    { name: '業者', href: '/contractors', current: false },
  ]

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
      <div className="py-5">
        <Breadcrumbs pages={pages} />
      </div>
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
