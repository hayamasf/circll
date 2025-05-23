import React from "react";
import { sendResetPasswordEmail } from "@/actions/auth";

export default function ForgotPasswordForm() {
  return (
    <form action={sendResetPasswordEmail} className="space-y-6">
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
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-500 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          パスワードを再設定する
        </button>
      </div>
    </form>
  );
}
