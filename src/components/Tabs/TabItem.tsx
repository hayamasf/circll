"use client";

import { ReactNode } from "react";

export type TabItemProps = {
  label: string;
  children: ReactNode;
};

export function TabItem({ label, children }: TabItemProps) {
  return <div className="my-5">{children}</div>;
}
