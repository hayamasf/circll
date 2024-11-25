"use client";

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { usePathname } from "next/navigation";

import XMarkIcon from "@/app/icons/XMarkIcon";
import Topbar from "./Topbar";

import { HomeIcon } from "@heroicons/react/24/outline";

import SidebarNavigation from "./SidebarNavigation";

const navigationItems = [
  { id: 1, name: "ホーム", href: "/", icon: HomeIcon },
  // {
  //   id: 2,
  //   name: "排出事業者",
  //   href: "/clients",
  //   icon: BuildingOfficeIcon,
  //   current: false,
  // },
  // {
  //   id: 3,
  //   name: "事業場",
  //   href: "#",
  //   icon: BuildingStorefrontIcon,
  //   current: false,
  // },
  // {
  //   id: 4,
  //   name: "業者",
  //   href: "/contractors",
  //   icon: TruckIcon,
  //   current: false,
  // },
];

// const configItems = [
//   {
//     id: 1,
//     name: "排出事業者",
//     href: "/clients",
//   },
//   {
//     id: 2,
//     name: "事業所",
//     href: "/sites",
//   },
//   {
//     id: 3,
//     name: "業者",
//     href: "/contractors",
//   },
// ];

export default function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentPath = usePathname();

  // const updatedNavigationItems = navigationItems.map((item) => ({ ...item, current: item.href === currentPath }))
  // const updatedConfigItems = configItems.map((item) => ({ ...item, current: currentPath.startsWith(item.href) }))

  return (
    <>
      {/* Sidebar for mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <SidebarNavigation />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <SidebarNavigation />
      </div>

      {/* Topbar */}
      <Topbar setSidebarOpen={setSidebarOpen} />
    </>
  );
}
