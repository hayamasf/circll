"use client";

import { ReactNode } from "react";

export type TabItemProps = {
  label: string;
  children: ReactNode;
};

export function TabItem({ label, children }: TabItemProps) {
  return <div>{children}</div>;
}
