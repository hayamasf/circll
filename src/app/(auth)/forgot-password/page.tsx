import React from "react";
import Link from "next/link";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

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
          <ForgotPasswordForm />
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
