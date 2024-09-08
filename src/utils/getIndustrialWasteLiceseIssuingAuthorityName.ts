import { authorities } from "@/data/constants";

export default function getIndustrialWasteLicenseIssuingAuthorityName(
  issuingAuthorityCode: number,
) {
  const issuingAuthority = authorities.find(
    (item) => item.id === issuingAuthorityCode,
  );

  return issuingAuthority ? issuingAuthority.name : undefined;
}
