import React from "react";
import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  Icon?: React.ElementType<{ className: string | undefined }>;
};

export default function LinkButton({ href, children, Icon }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {Icon && <Icon className="h-5 w-5 mr-3" />}
      {children}
    </Link>
  );
}
