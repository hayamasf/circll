import React from "react";
import Link from "next/link";
import { classNames } from "@/utils/classNames";
import { UserIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function LegalEntityTypeSelector({ type }: { type: string }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
      <Link
        href={"./register?type=corporate"}
        className={classNames(
          type === "corporate"
            ? "border-gray-500 border-2 bg-gray-100"
            : "border-gray-300 bg-white",
          "flex items-center  space-x-3 rounded-lg border px-6 py-3 shadow-sm sm:col-span-3 hover:border-gray-400",
        )}
      >
        <BuildingOfficeIcon className="h-6 w-6" />
        <div className="text-sm font-medium text-gray-800">会社など法人</div>
      </Link>
      <Link
        href={"./register?type=sole-proprietor"}
        className={classNames(
          type === "sole-proprietor"
            ? "border-gray-500 border-2 bg-gray-100"
            : "border-gray-300 bg-white",
          "flex items-center space-x-3 rounded-lg border px-6 py-3 shadow-sm sm:col-span-3 hover:border-gray-400",
        )}
      >
        <UserIcon className="h-6 w-6" />
        <div className="text-sm font-medium text-gray-800">個人事業主</div>
      </Link>
    </div>
  );
}
