"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function TabsNav({
  tabs,
}: {
  tabs: { name: string; href: string }[];
}) {
  const pathName = usePathname();
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-6" aria-label="Tabs">
        {tabs.map((tab) => {
          const isBaseTab = tab.href === tabs[0].href;

          const isActive = isBaseTab
            ? pathName === tab.href
            : pathName === tab.href || pathName.startsWith(tab.href + "/");
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={clsx(
                "whitespace-nowrap border-b-2 px-4 py-2 text-sm font-medium",
                isActive
                  ? "border-blue-600 text-blue-700 font-semibold"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
              )}
            >
              {tab.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
