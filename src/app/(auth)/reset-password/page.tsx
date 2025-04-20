import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=slate&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-base font-bold tracking-tight text-gray-900">
            登録したメールアドレスを入力してパスワードを再設定してください
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                メールアドレス
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                formAction={""}
                className="flex w-full justify-center cursor-pointer rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                パスワードを再設定する
              </button>
            </div>
          </form>
          <div className="flex mt-8">
            <Link
              href={"/sign-in"}
              className="mx-auto text-sm font-semibold text-blue-600 hover:text-blue-500 hover:underline"
            >
              ログインはこちら
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
