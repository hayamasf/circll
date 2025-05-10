import React from "react";
import MswLicenseDetail from "@/components/MswLicenseDetail";
import IndustrialWasteLicenseDetail from "@/components/IndustrialWasteLicenseDetail";

export default async function Page(props: {
  params: Promise<{ type: "msw" | "industrial-waste";["license-id"]: string }>;
}) {
  const params = await props.params;
  const type = params.type;
  const licenseId = Number(params["license-id"]);

  return (
    <div className="mx-auto max-w-lg">
      {type === "msw" && <MswLicenseDetail id={licenseId} />}
      {type === "industrial-waste" && (
        <IndustrialWasteLicenseDetail id={licenseId} />
      )}
    </div>
  );
}
