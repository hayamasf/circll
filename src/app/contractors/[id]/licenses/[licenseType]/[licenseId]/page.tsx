import React from "react";
import PageHeader from "@/components/PageHeader";

export default async function page({ params }: { params: { licenseType: string, licenseId: number } }) {

  const licenseType = params.licenseType;
  return (
    <div className="mx-auto max-w-lg">
      <PageHeader title={"個別の許可証"} />
      {licenseType}
      {params.licenseId}
    </div>
  );
}
