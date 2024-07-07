import React from "react";
import PageHeader from "@/components/PageHeader";

export default async function Page(params: any) {
  return (
    <>
      <div className="mx-auto max-w-lg">
        <PageHeader title="許可証の登録" />
      </div>

      <div>許可証の登録</div>

    </>
  );
}
