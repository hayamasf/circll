import React from "react";
import Link from "next/link";
import { UserIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function LegalEntityTypeSelector() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Link
        href={"./register/corporate"}
        className="flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        <BuildingOfficeIcon className="h-6 w-6" />
        <div className="text-sm font-medium text-gray-800">会社など法人</div>
      </Link>
      <Link
        href={"./register/sole-proprietor"}
        className="flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        <UserIcon className="h-6 w-6" />
        <div className="text-sm font-medium text-gray-800">個人事業主</div>
      </Link>
    </div>
  );
}
