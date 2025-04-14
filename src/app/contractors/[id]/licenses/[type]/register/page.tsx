import React from "react";
import MswLicenseRegistrationForm from "@/components/MswLicenseRegistrationForm";
import IndustrialWasteLicenseRegistrationForm from "@/components/IndustrialWasteLicenseRegistrationForm";
import getIndustrialWasteCategories from "@/utils/getIndustrialWasteCategories";
import getContractorById from "@/utils/getContractorById";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function Page(
  props: {
    params: Promise<{ id: string; type: "msw" | "industrial-waste" }>;
  }
) {
  const params = await props.params;
  const id = Number(params.id);
  const type = params.type;
  const contractor = await getContractorById(id);
  const contractorName = `${contractor?.isPrefixEntityType ? contractor.entityType : ""}${contractor?.name}${contractor?.entityType && !contractor.isPrefixEntityType ? contractor.entityType : ""}`;

  if (!contractor) {
    return <div>業者の登録がありません.</div>;
  }

  if (type === "industrial-waste") {
    const industrialWasteCategories = await getIndustrialWasteCategories();

    const pages = [
      { name: "業者", href: "/contractors", current: false },
      {
        name: contractorName || "",
        href: `/contractors/${contractor.id}`,
        current: false,
      },
      { name: "許可", href: "", current: false },
      { name: "産業廃棄物", href: "", current: false },
      { name: "登録", href: "", current: true },
    ];

    return (
      <div className="mx-auto max-w-lg">
        <div className="pt-3 pb-10">
          <Breadcrumbs pages={pages} />
        </div>

        <IndustrialWasteLicenseRegistrationForm
          id={id}
          industrialWasteCategories={industrialWasteCategories}
        />
      </div>
    );
  } else if (type === "msw") {
    const pages = [
      { name: "業者", href: "/contractors", current: false },
      {
        name: contractorName || "",
        href: `/contractors/${contractor.id}`,
        current: false,
      },
      { name: "許可", href: "", current: false },
      { name: "一般廃棄物", href: "", current: false },
      { name: "登録", href: "", current: true },
    ];

    return (
      <div className="mx-auto max-w-lg">
        <div className="pt-3 pb-10">
          <Breadcrumbs pages={pages} />
        </div>
        <MswLicenseRegistrationForm id={id} />
      </div>
    );
  }
}
