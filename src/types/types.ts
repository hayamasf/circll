export type NavigationItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
};

export type TeamItem = {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
};

export type UserNavigationItem = {
  name: string;
  href: string;
};

export type NavigationProps = {
  navigation: NavigationItem[];
  teams: TeamItem[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

export type TopBarProps = {
  userNavigation: UserNavigationItem[];
  setSidebarOpen: (open: boolean) => void;
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
