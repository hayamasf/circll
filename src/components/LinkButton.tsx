import React from "react";
import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="rounded-full bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {children}
    </Link>
  );
}
