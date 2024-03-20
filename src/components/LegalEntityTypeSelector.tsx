import React from "react";
import Link from "next/link";
import { UserIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function LegalEntityTypeSelector() {
    return (
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link href={"/contractors/register?type=corporate"} className="flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-2 hover:border-gray-400">
                <BuildingOfficeIcon className="h-6 w-6" />
                <div className="text-sm font-medium text-gray-800">会社など法人</div>
            </Link>
            {/* <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div className="flex-shrink-0">
                    <BuildingOfficeIcon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                    <link href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">会社など法人</p>
                    </link>
                    <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">会社など法人</p>
                    </a>
                </div>
            </div> */}
            <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div className="flex-shrink-0">
                    <UserIcon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                    <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">個人事業主</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
