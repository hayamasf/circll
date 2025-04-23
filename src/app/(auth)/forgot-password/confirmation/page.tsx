import React from "react";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=slate&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          circll
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
          <h3 className="text-center text-base font-bold tracking-tight text-gray-900">
            パスワード再設定メールを送信しました!
          </h3>
          <p className="text-sm pt-8">
            メールが届かない場合、迷惑メールフォルダをご確認下さい.
          </p>
        </div>
      </div>
      <div className="flex mt-10">
        <Link
          href={"/forgot-password"}
          className="mx-auto text-sm font-semibold text-blue-600 hover:text-blue-500 hover:underline"
        >
          パスワード再設定画面へ
        </Link>
      </div>
    </div>
    // <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //     <img
    //       alt="Your Company"
    //       src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=slate&shade=600"
    //       className="mx-auto h-10 w-auto"
    //     />
    //   </div>

    //   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //     <p className="text-sm">

    //     </p>
    //     <div className="flex mt-8">

    //     </div>
    //   </div>
    // </div>
  );
}
