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

export type LegalEntity = {
  id: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy?: string | null;
  entityType?: string | null;
  isPrefixEntityType?: boolean | null;
  name: string;
  tradeName?: string | null;
  title?: string | null;
  representative?: string | null;
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
  prefectureId: number;
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
