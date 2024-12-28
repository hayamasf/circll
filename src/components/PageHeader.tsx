import React from "react";

export default function PageHeader({ title }: { title: string }) {
  return (
    <h1 className="my-3 text-lg font-semibold leading-7 text-gray-800 sm:truncate sm:text-xl sm:tracking-wide">
      {title}
    </h1>
  );
}
