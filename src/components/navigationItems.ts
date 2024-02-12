import { NavigationItem } from "@/types/types";

import {
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export const navigationItems: NavigationItem[] = [
  { id: 1, name: "ホーム", href: "/", icon: HomeIcon, current: true },
  {
    id: 2,
    name: "排出事業者",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    id: 3,
    name: "事業場",
    href: "#",
    icon: BuildingStorefrontIcon,
    current: false,
  },
  {
    id: 4,
    name: "業者",
    href: "/contractors",
    icon: TruckIcon,
    current: false,
  },
];
