import React from "react";
import { MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";

type menuItemsType = {
  id: number;
  text: string;
  href: string;
};

type DropdownMenuItemsProps = {
  menuItems: menuItemsType[];
};

export default function DropdownMenuItems({
  menuItems,
}: DropdownMenuItemsProps) {
  return (
    <MenuItems
      transition
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <div className="py-1">
        {menuItems.map((item) => (
          <MenuItem key={item.id}>
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              {item.text}
            </Link>
          </MenuItem>
        ))}
      </div>
    </MenuItems>
  );
}
