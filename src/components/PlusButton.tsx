import React from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

export default function PlusButton() {
  return (
    <button
      type="button"
      className="rounded-full bg-gray-600 p-1.5 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
    >
      <PlusIcon aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}
