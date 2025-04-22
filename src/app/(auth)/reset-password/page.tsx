import React from "react";
import ResetPasswordForm from "@/components/ResetPasswordForm";

export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
          <h2 className="text-center text-lg font-bold tracking-tight text-gray-900">
            新しいパスワードの設定
          </h2>
          <div className="pt-8">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>

    // <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //     <img
    //       alt="Your Company"
    //       src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=slate&shade=600"
    //       className="mx-auto h-10 w-auto"
    //     />
    //     <h2 className="mt-10 text-center text-base font-bold tracking-tight text-gray-900">
    //       新しいパスワードを設定してください.
    //     </h2>
    //   </div>

    //   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //   </div>
    // </div>
  );
}
