import { authorities } from "@/data/constants";

export function getIndustrialWasteLicenseIssuingAuthorityName(
  issuingAuthorityCode: number,
) {
  const issuingAuthority = authorities.find(
    (item) => item.id === issuingAuthorityCode,
  );

  return issuingAuthority ? issuingAuthority.name : undefined;
}