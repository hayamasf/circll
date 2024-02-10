export type NavigationItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
};

export type UserNavigationItem = {
  id: number;
  name: string;
  href: string;
};

export type Contractor = {
  name: string;
  title: string;
  representative: string;
  zipCode: string;
  prefecture: string;
  city: string;
  town: string;
  address: string;
  address2?: string | null;
  createdBy: string;
}
