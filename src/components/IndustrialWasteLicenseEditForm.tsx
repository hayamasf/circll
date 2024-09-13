import React from "react";
import { IndustrialWasteLicense, Contractor, WasteItem } from "@prisma/client";
import Link from "next/link";

type IndustrialWasteLicenseWithRelations = IndustrialWasteLicense & {
  contractor: Contractor;
  wasteItems: WasteItem[];
};

export default async function IndustrialWasteLicenseEditForm({
  license,
}: {
  license: IndustrialWasteLicenseWithRelations | null;
}) {
  if (!license) {
    return <div>データが見つかりません.</div>;
  }

  return (
    <div className="grid gap-y-10">
      <Link href={"/contractors/" + license.contractor.id}>
        {license.contractor.isPrefixEntityType && license.contractor.entityType}
        {license.contractor.name}
        {license.contractor.entityType &&
          !license.contractor.isPrefixEntityType &&
          license.contractor.entityType}
      </Link>
      <div>{license.contractorId}</div>
      <div>{license.createdBy}</div>
      <div>{license.contractor.name}</div>
    </div>
  );
}
