import React from "react";
import Link from "next/link";

import { PlusIcon } from "@heroicons/react/24/outline";

export default function LinkToRegister({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="flex gap-x-2 items-center text-gray-900 hover:underline"
    >
      <PlusIcon className="h-4 w-4 text-gray-500" />
      <span className="text-sm font-semibold">登録する</span>
    </Link>
  );
}
