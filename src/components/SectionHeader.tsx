import React from "react";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-lg font-bold leading-7 text-gray-800 sm:truncate sm:text-xl sm:tracking-tight">
      {title}
    </div>
  );
}
