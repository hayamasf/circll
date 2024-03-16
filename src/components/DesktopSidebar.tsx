import React from "react";
import Link from "next/link";
import { classNames } from "@/utils/classNames";
import { NavigationItem } from "@/types/types";
import { ConfigItem } from "@/types/types";

import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function DesktopSidebar({
  navigationItems,
  configItems,
}: {
  navigationItems: NavigationItem[];
  configItems: ConfigItem[];
}) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=emerald&shade=200"
            alt="circll"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-indigo-600"
                          : "text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6",
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-indigo-600"
                            : "text-gray-400 group-hover:text-gray-800",
                          "h-6 w-6 shrink-0",
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="mb-3 text-sm flex font-semibold leading-6 text-gray-400">
                <Cog6ToothIcon
                  className="h-6 w-6 shrink-0 mr-3"
                  aria-hidden="true"
                />
                設定
              </div>
              <ul role="list" className="-mx-2 space-y-1">
                {configItems.map((item: any) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-gray-800"
                          : "text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                        "block pl-11 rounded-md p-2 text-sm leading-6",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
