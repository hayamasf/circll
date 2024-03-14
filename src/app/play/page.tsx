"use client";

import React from "react";

import { classNames } from "@/utils/classNames";

const tabs = [
  { id: 1, name: '会社など法人', href: '#', current: true },
  { id: 2, name: '個人事業主', href: '#', current: false },
]

export default function Page() {
  return (
    <div>
      <div className="block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-gray-500 text-gray-800'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
