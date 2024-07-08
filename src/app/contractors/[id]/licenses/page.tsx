import React from "react";
import Link from "next/link";

export default async function Page(params: any) {
  return (
    <>
      <div>許可証一覧</div>
      <div>
        <Link href={"./licenses/msw/register"}>一般廃棄物処理業許可</Link>
      </div>
      <div>
        <Link href={"./licenses/industrial-waste/register"}>産業廃棄物処理業許可</Link>
      </div>
    </>
  );
}
