import React from "react";
import { getCurrentUser } from "@/utils/getCurrentUser";
import UserProfileForm from "@/components/UserProfileForm";

export default async function Page() {
  const currentUser = await getCurrentUser();

  return (
    <div className="mx-auto max-w-2xl">
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">
          ユーザー情報
        </h3>
        {/* <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
          表示名の変更はこちらから
        </p> */}
      </div>
      <div className="px-4 sm:px-0">
        <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <p className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
              メールアドレス
            </p>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <p className="block w-full px-3 py-1.5 text-base text-gray-900 sm:max-w-xs sm:text-sm/6">
                {currentUser?.email}
              </p>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <p className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
              権限
            </p>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <p className="block w-full px-3 py-1.5 text-base text-gray-900 sm:max-w-xs sm:text-sm/6">
                {currentUser?.role || "一般ユーザー"}
              </p>
            </div>
          </div>
        </div>
        <UserProfileForm />
      </div>
      {/* <UserProfileForm /> */}
      {/* <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              メールアドレス
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.user?.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Application for
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Backend Developer
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <input type="text"></input>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Salary expectation
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              $120,000
            </dd>
          </div>
        </dl>
      </div> */}
    </div>
  );
}

{
  /* {user?.picture && (
              <Image
                src={user.picture}
                alt="プロフィールアバター"
                className="rounded-full"
                width={64}
                height={64}
              />
            )} */
}
