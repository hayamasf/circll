import {
  Label,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type menuItem = {
  id: number;
  href: string;
  text: string;
};

export default function PlusIconDropdownMenu({
  menuItems,
}: {
  menuItems: menuItem[];
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex p-1 items-center rounded-full cursor-pointer bg-gray-600 text-white hover:bg-gray-400 focus:outline-hidden focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <span className="sr-only">Open options</span>

          <PlusIcon aria-hidden="true" className="size-5" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75 data-enter:ease-out data-leave:ease-in"
      >
        <div className="py-1">
          {menuItems.map((item) => (
            <MenuItem key={item.id}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                {item.text}
              </Link>
            </MenuItem>
          ))}
          {/* <MenuItem>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              会社など法人
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              個人事業
            </Link>
          </MenuItem> */}
        </div>
      </MenuItems>
    </Menu>
  );
}
