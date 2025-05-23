import { industrialWasteLicenseTypeCodes } from "@/data/constants";

export default function getIndustrialLicenseTypeName(
  typeCode: number,
): string | undefined {
  const type = industrialWasteLicenseTypeCodes.find(
    (item) => item.id === typeCode,
  );
  return type ? type.name : undefined;
}
