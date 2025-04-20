import React from "react";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=slate&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h1 className="mt-10 text-center text-base font-bold tracking-tight text-gray-900">
          パスワード再設定メールを送信しました!
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="text-sm">
          メールが届かない場合、迷惑メールフォルダをご確認下さい.
        </p>
        <div className="flex mt-8">
          <Link
            href={"/forgot-password"}
            className="mx-auto text-sm font-semibold text-blue-600 hover:text-blue-500 hover:underline"
          >
            パスワードの再設定画面へ
          </Link>
        </div>
      </div>
    </div>
  );
}
