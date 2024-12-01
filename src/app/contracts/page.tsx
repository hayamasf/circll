import React, { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import Loading from "../loading";
import DropdownNavigationMenu from "@/components/DropdownNavigationMenu";

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="契約" />
        <DropdownNavigationMenu title="契約を登録する" />
      </div>

      <Suspense fallback={<Loading />}>内容</Suspense>
    </div>
  );
}
