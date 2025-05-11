"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { useWindowWidth } from "@/hooks/useWindowWidth";

import { classNames } from "@/utils/classNames";

const navigationItems = [
  { id: 1, name: "ダッシュボード", href: "/" },
  {
    id: 2,
    name: "排出",
    children: [
      { id: 1, name: "事業者", href: "/clients" },
      { id: 2, name: "事業所", href: "/clients/sites" },
    ],
  },
  { id: 3, name: "業者", href: "/contractors" },
  { id: 4, name: "契約", href: "/contracts" },
];

export default function SidebarNavigation({
  setSidebarOpen,
}: {
  setSidebarOpen?: (open: boolean) => void;
}) {
  const currentPath = usePathname();
  const width = useWindowWidth();

  const [openDisclosure, setOpenDisclosure] = useState<string | null>(null);

  const updatedNavigation = navigationItems.map((item) => ({
    ...item,
    current: item.href
      ? item.href === "/"
        ? currentPath === "/"
        : currentPath.startsWith(item.href)
      : false,
    children: item.children
      ? item.children.map((child) => ({
        ...child,
        current: currentPath.startsWith(child.href),
      }))
      : undefined,
  }));

  const handleDisclosureToggle = (itemName: string) => {
    setOpenDisclosure((prev) => (prev === itemName ? null : itemName));
  };

  const handleLinkClick = () => {
    if (width !== null && width < 1024 && setSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="circll"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {updatedNavigation.map((item) => (
                <li key={item.id}>
                  {!item.children ? (
                    <Link
                      href={item.href || "/"}
                      onClick={handleLinkClick}
                      className={classNames(
                        item.current ? "bg-gray-50" : "hover:bg-gray-50",
                        "block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700",
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleDisclosureToggle(item.name)}
                        className={
                          "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 hover:cursor-pointer"
                        }

                      // className={classNames(
                      //   item.current ? "bg-gray-50" : "hover:bg-gray-50",
                      //   "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 hover:cursor-pointer",
                      // )}
                      >
                        <ChevronRightIcon
                          aria-hidden="true"
                          className={classNames(
                            "size-5 shrink-0 text-gray-400 group-hover:text-gray-500",
                            openDisclosure === item.name &&
                            "rotate-90 text-gray-500",
                          )}
                        />

                        {item.name}
                      </button>
                      {openDisclosure === item.name && (
                        <ul className="mt-1 px-2">
                          {item.children.map((subItem) => (
                            <li key={subItem.id}>
                              <Link
                                href={subItem.href}
                                onClick={handleLinkClick}
                                className={classNames(
                                  subItem.current
                                    ? "bg-gray-50"
                                    : "hover:bg-gray-50",
                                  "block rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-700",
                                )}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </li>
          {/* <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full bg-gray-50"
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
