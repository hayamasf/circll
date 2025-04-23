import React from "react";
import Link from "next/link";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

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
          <div className="text-xs pb-8">
            登録されたメールアドレスを入力してパスワードを再設定してください
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
      <div className="flex mt-10">
        <Link
          href={"/sign-in"}
          className="mx-auto text-sm font-semibold text-blue-600 hover:text-blue-500 hover:underline"
        >
          ログインはこちら
        </Link>
      </div>
    </div>
  );
}
