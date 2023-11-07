"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
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
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "業者", href: "/contractors", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams: TeamItem[] = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

const userNavigation: UserNavigationItem[] = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="ja" className="h-full bg-white">
      <body className={inter.className + "h-full"}>
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
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
