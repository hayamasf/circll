import React from "react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import MswLicenseRegistrationForm from "@/components/MswLicenseRegistrationForm";
import IndustrialWasteLicenseRegistrationForm from "@/components/IndustrialWasteLicenseRegistrationForm";
import getIndustrialWasteCategories from "@/utils/getIndustrialWasteCategories";
import getContractorById from "@/utils/getContractorById";

export default async function Page({
  params,
}: {
  params: { id: string; licenseType: "msw" | "industrial-waste" };
}) {
  const id = Number(params.id);
  const licenseType = params.licenseType;
  const contractor = await getContractorById(id);

  if (!contractor) {
    return <div>業者の登録がありません.</div>;
  }

  if (licenseType === "industrial-waste") {
    const industrialWasteCategories = await getIndustrialWasteCategories();

    return (
      <div className="mx-auto max-w-md">
        <div className="flex pb-10 text-sm items-center">
          <Link
            href={"/contractors/" + contractor.id}
            className="hover:underline"
          >
            {contractor.isPrefixEntityType && contractor.entityType}
            {contractor.name}
            {contractor.entityType &&
              !contractor.isPrefixEntityType &&
              contractor.entityType}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          {"許可情報の登録"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          {"産業廃棄物"}
        </div>
        <IndustrialWasteLicenseRegistrationForm
          id={id}
          industrialWasteCategories={industrialWasteCategories}
        />
      </div>
    );
  } else if (licenseType === "msw") {
    return (
      <div className="mx-auto max-w-md">
        <PageHeader title="許可情報の登録" />
        <MswLicenseRegistrationForm id={id} />
      </div>
    );
  }
}
