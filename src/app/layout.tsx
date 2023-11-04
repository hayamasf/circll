"use client";

import { useState } from "react";
import type { Metadata } from "next";
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

import Navigation from "@/components/Navigation";
import TopBar from "@/components/TopBar";

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
};

type TeamItem = {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
};

type UserNavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
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
