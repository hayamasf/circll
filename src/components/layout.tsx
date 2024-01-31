"use client";

import React, { useState } from "react";

import {
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  TruckIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import { NavigationItem } from "@/types/types";
import { TeamItem } from "@/types/types";
import { UserNavigationItem } from "@/types/types";

import Navigation from "@/components/Navigation";
import TopBar from "@/components/TopBar";

const navigation: NavigationItem[] = [
  { name: "ホーム", href: "/", icon: HomeIcon, current: true },
  { name: "排出事業者", href: "#", icon: BuildingOfficeIcon, current: false },
  { name: "事業場", href: "#", icon: BuildingStorefrontIcon, current: false },
  { name: "業者", href: "/contractors", icon: TruckIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams: TeamItem[] = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

const userNavigation: UserNavigationItem[] = [
  { name: "プロフィール", href: "#" },
  { name: "ログアウト", href: "/api/auth/logout" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Navigation
        navigation={navigation}
        teams={teams}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="lg:pl-72">
        <TopBar
          userNavigation={userNavigation}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
