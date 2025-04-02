export type NavigationItem = {
  id: number;
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
};

export type ConfigItem = {
  id: number;
  name: string;
  href: string;
  current: boolean;
};

export type UserNavigationItem = {
  id: number;
  name: string;
  href: string;
};

export type Address = {
  postalCode: string;
  prefecture: string;
  city: string;
  town: string;
  address: string;
  address2?: string | null;
};

export type LegalEntityFormData = {
  entityType?: string | null;
  isPrefixEntityType?: string | boolean | null;
  name: string;
  tradeName?: string | null;
  representativeTitle?: string | null;
  representativeName?: string | null;
  postalCode: string;
  prefecture: string;
  city: string;
  town: string;
  address: string;
  address2?: string | null;
  [key: string]: any;
};

export type Site = {
  id: number;
  clientId: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy?: string | null;
  name: string;
  postalCode: string;
  prefecture: string;
  city: string;
  town: string;
  address: string;
  address2?: string | null;
  [key: string]: any;
};

export type RadioOption = {
  id: string;
  title: string;
};

export type Prefecture = {
  id: number;
  name: string;
};

export type Municipality = {
  id: number;
  name: string;
  prefectureId: number;
};

export type MswLicense = {
  id: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string | null;
  contractorId: number;
  municipalityId: number;
  type: number;
  expirationDate: Date;
  licenseUrl: string;
  municipality: {
    id: number;
    name: string;
  };
};

export type WasteItem = {
  id: number;
  name: string;
};

export type IndustrialWasteLicense = {
  id: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string | null;
  contractorId: number;
  issuingAuthority: number;
  typeCode: number;
  authorityCode: number;
  contractorCode: number;
  expirationDate: Date;
  licenseUrl: string;
  wasteItems: WasteItem[];
};

export type WasteContractFormData = {
  createdBy: String;
  clientId: number;
  contractorId: number;
  type: "transportation" | "disposal";
  endDate: Date;
  isAutoRenew: boolean;
  waste: string;
};
