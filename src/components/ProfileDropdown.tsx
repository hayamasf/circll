import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { logout } from "@/app/(authenticated)/logout/actions";

export default function ProfileDropdown() {
  // const session = await auth0.getSession();
  // const user = session?.user
  // const { user } = useUser();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 hover:cursor-pointer">
          hayama
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              ユーザー情報
            </Link>
          </MenuItem>
          <form action={logout}>
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:cursor-pointer data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                ログアウト
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>

    // <Menu as="div" className="relative">
    //   <MenuButton className="-m-1.5 flex items-center p-1.5">
    //     <span className="sr-only">ユーザーメニューを開く</span>
    /* <div>
      {user?.picture && (
        <Image
          src={user.picture}
          alt="プロフィールアバター"
          className="rounded-full"
          width={32}
          height={32}
        />
      )}
    </div> */
    // <span className="hidden lg:flex lg:items-center">
    //   <span
    //     className="ml-4 text-sm font-semibold leading-6 text-gray-900"
    //     aria-hidden="true"
    //   >
    /* {user?.nickname} */
    //           hayama
    //         </span>
    //         <ChevronDownIcon
    //           className="ml-2 h-5 w-5 text-gray-400"
    //           ariaHidden={true}
    //         />
    //       </span>
    //     </MenuButton>
    //     <Transition
    //       as={Fragment}
    //       enter="transition ease-out duration-100"
    //       enterFrom="transform opacity-0 scale-95"
    //       enterTo="transform opacity-100 scale-100"
    //       leave="transition ease-in duration-75"
    //       leaveFrom="transform opacity-100 scale-100"
    //       leaveTo="transform opacity-0 scale-95"
    //     >
    //       <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-hidden">
    //         {userNavigation.map((item) => (
    //           <MenuItem key={item.id}>
    //             {({ active }) => (
    //               <Link
    //                 href={item.href}
    //                 className={classNames(
    //                   active ? "bg-gray-50 text-gray-800" : "",
    //                   "block px-3 py-1 text-sm leading-6 text-gray-600",
    //                 )}
    //               >
    //                 {item.name}
    //               </Link>
    //             )}
    //           </MenuItem>
    //         ))}
    //         <div className="block px-3 py-1 text-sm leading-6 text-gray-600 hover:bg-gray-50 hover:cursor-pointer">
    //           <form action={logout}>
    //             <button type="submit">ログアウト</button>
    //           </form>
    //         </div>
    //       </MenuItems>
    //     </Transition>
    //   </Menu>
  );
}
