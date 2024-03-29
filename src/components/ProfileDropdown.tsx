"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ChevronDownIcon from "@/app/icons/ChevronDownIcon";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "@/utils/classNames";

import { UserNavigationItem } from "@/types/types";

const userNavigation: UserNavigationItem[] = [
  { id: 1, name: "プロフィール", href: "/profile" },
  { id: 2, name: "ログアウト", href: "/api/auth/logout" },
];

const ProfileDropdown = () => {
  const { user } = useUser();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="-m-1.5 flex items-center p-1.5">
        <span className="sr-only">ユーザーメニューを開く</span>
        <div>
          {user?.picture && (
            <Image
              src={user.picture}
              alt="プロフィールアバター"
              className="rounded-full"
              width={32}
              height={32}
            />
          )}
        </div>
        <span className="hidden lg:flex lg:items-center">
          <span
            className="ml-4 text-sm font-semibold leading-6 text-gray-900"
            aria-hidden="true"
          >
            {user?.nickname}
          </span>
          <ChevronDownIcon
            className="ml-2 h-5 w-5 text-gray-400"
            ariaHidden={true}
          />
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.id}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={classNames(
                    active ? "bg-gray-50 text-gray-800" : "",
                    "block px-3 py-1 text-sm leading-6 text-gray-600",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropdown;
