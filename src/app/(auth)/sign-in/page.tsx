import { signIn } from "./actions";
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
          {/* <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2> */}
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
                  tabIndex={1}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  パスワード
                </label>
                <div className="text-sm">
                  <Link href={"/forgot-password"} className="text-sm font-semibold text-blue-600 hover:text-blue-500 hover:underline">
                    パスワードをお忘れの方
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  tabIndex={2}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                tabIndex={3}
                formAction={signIn}
                className="flex w-full justify-center cursor-pointer rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                ログイン
              </button>
              {/* <button formAction={signup} className="mt-12">
                Sign up
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// export default function LoginPage() {
//   return (
//     <main>
//       <form>
//         <label htmlFor="email">Email:</label>
//         <input id="email" name="email" type="email" required />
//         <label htmlFor="password">Password:</label>
//         <input id="password" name="password" type="password" required />
//         <button formAction={login}>Log in</button>
//         <button formAction={signup}>Sign up</button>
//       </form>
//     </main>
//   )
// }
