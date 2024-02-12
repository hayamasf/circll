import React from "react";
import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/20/solid";

type EditLinkProps = {
  href: string;
};

export default function EditLink({ href }: EditLinkProps) {
  return (
    <>
      <Link
        href={href}
        className="group flex items-center text-sm text-gray-500 hover:text-gray-700"
      >
        <PencilSquareIcon
          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-700"
          aria-hidden="true"
        />
        編集する
      </Link>
    </>
  );
}
