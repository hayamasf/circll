import React, { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import Loading from "../loading";
import DropdownNavigationMenu from "@/components/DropdownNavigationMenu";

const menuSections = [
  {
    id: 1,
    items: [
      { id: 1, text: "一般廃棄物処理", href: "./register/msw/treatment" },
      { id: 2, text: "一般廃棄物処分", href: "#" },
    ],
  },
  {
    id: 2,
    items: [
      { id: 1, text: "産業廃棄物収集運搬", href: "#" },
      { id: 2, text: "産業廃棄物処分", href: "#" },
    ],
  },
  {
    id: 3,
    items: [
      { id: 1, text: "専ら物", href: "#" },
      { id: 2, text: "売買契約", href: "#" },
    ],
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="契約" />
        <DropdownNavigationMenu title="契約を登録する" menuSections={menuSections} />
      </div>

      <Suspense fallback={<Loading />}>内容</Suspense>
    </div>
  );
}
