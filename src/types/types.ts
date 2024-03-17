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

// export type Contractor = {
//   name: string;
//   title: string;
//   representative: string;
//   zipCode: string;
//   prefecture: string;
//   city: string;
//   town: string;
//   address: string;
//   address2?: string | null;
//   createdBy: string;
//   updatedBy?: string | null;
//   [key: string]: any;
// };

// export type Client = {
//   id: number;
//   createdAt: Date;
//   createdBy: string;
//   updatedAt: Date;
//   updatedBy?: string;
//   entityType?: string;
//   isPrefixEntityType?: boolean;
//   name: string;
//   tradeName?: string;
//   title?: string;
//   representative?: string;
//   zipCode: string;
//   prefecture: string;
//   city: string;
//   town: string;
//   address: string;
//   address2?: string;
// };

export type LegalEntity = {
  id: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy?: string;
  entityType?: string;
  isPrefixEntityType?: boolean;
  name: string;
  tradeName?: string;
  title?: string;
  representative?: string;
  zipCode: string;
  prefecture: string;
  city: string;
  town: string;
  address: string;
  address2?: string;
  [key: string]: any;
};
