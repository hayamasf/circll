"use client";

import React, { useState } from "react";
import { TabItemProps } from "./TabItem";
import { classNames } from "@/utils/classNames";

type TabsProps = {
  children: React.ReactElement<TabItemProps>[];
};

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* tabヘッダー */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-2" aria-label="Tabs">
          {children.map((child, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={classNames(
                activeTab === index
                  ? "border-blue-600 text-blue-700 font-semibold"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 px-4 py-2 text-sm font-medium",
              )}
            >
              {child.props.label}
            </button>
          ))}
        </nav>
      </div>

      {/* tabコンテンツ */}
      <div>{children[activeTab]}</div>
    </div>
  );
}
