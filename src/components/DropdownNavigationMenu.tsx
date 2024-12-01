import React from "react";

import { Menu, MenuButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import DropdownMenuItems from "./DropdownMenuItems";

const menuItems = [
  { id: 1, text: "一般廃棄物処理", href: "/contracts/register?type=msw" },
  {
    id: 2,
    text: "産業廃棄物収集運搬",
    href: "/contracts/register?type=industrial-waste-transportation",
  },
  {
    id: 3,
    text: "産業廃棄物処分",
    href: "/contracts/register?type=industrial-waste-disposal",
  },
];

export default function DropdownNavigationMenu({ title }: { title: string }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
          {title}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>
      <DropdownMenuItems menuItems={menuItems} />
    </Menu>
  );
}
