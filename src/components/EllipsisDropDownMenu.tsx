"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utils/classNames";

type menuItems = {
  id: number;
  text: string;
  href: string;
};

type EllipsisDropDownMenuProps = {
  menuItems: menuItems[];
};

export default function EllipsisDropDownMenu({
  menuItems,
}: EllipsisDropDownMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600 hover:cursor-pointer">
          <span className="sr-only">操作メニューを表示する</span>
          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-200 ring-opacity-5 focus:outline-hidden">
          <div className="py-1">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                as={Link}
                href={item.href}
                className={({ focus }) =>
                  classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex px-4 py-2 text-sm",
                  )
                }
              >
                <span>{item.text}</span>

                {/* {({ active }) => ( */}
                {/* <item.icon
                      className="mr-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    /> */}

                {/* )} */}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
