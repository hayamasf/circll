"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "8文字以上で設定して下さい." })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]*$/, {
        message: "英字と数字の両方を含めて下さい.",
      }),
    confirmPassword: z.string(),
  })
  .refine((formData) => formData.newPassword === formData.confirmPassword, {
    message: "パスワードが一致しません.",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (formData: FormData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="POST" className="space-y-6">
      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm/6 font-medium text-gray-900"
        >
          新しいパスワード
        </label>
        <div className="mt-2">
          <input
            tabIndex={1}
            id="newPassword"
            {...register("newPassword")}
            type="password"
            placeholder="新しいパスワード"
            required
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
          />
          {errors.newPassword && (
            <p className="pt-1 pl-2 text-sm text-red-500">
              {errors.newPassword.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm/6 font-medium text-gray-900"
        >
          新しいパスワード（確認用）
        </label>
        <div className="mt-2">
          <input
            tabIndex={2}
            id="confirmPassword"
            {...register("confirmPassword")}
            type="password"
            placeholder="新しいパスワードをもう一度入力"
            required
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
          />
          {errors.confirmPassword && (
            <p className="pt-1 pl-2 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-12">
        <button
          tabIndex={3}
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-500 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          新しいパスワードを設定
        </button>
      </div>
    </form>
    // <form action="#" method="POST" className="space-y-6">
    //   <div>
    //     <label
    //       htmlFor="email"
    //       className="block text-sm/6 font-medium text-gray-900"
    //     >
    //       新しいパスワード
    //     </label>
    //     <div className="mt-2">
    //       <input
    //         id="password"
    //         type="password"
    //         {...register("password")}
    //         required
    //         className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     <label
    //       htmlFor="email"
    //       className="block text-sm/6 font-medium text-gray-900"
    //     >
    //       新しいパスワード（確認用）
    //     </label>
    //     <div className="mt-2">
    //       <input
    //         id="confirmPassword"
    //         type="password"
    //         {...register("confirmPassword")}
    //         required
    //         className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
    //       />
    //     </div>
    //   </div>

    //   <div className="mt-10">
    //     <button
    //       formAction={""}
    //       className="flex w-full justify-center cursor-pointer rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
    //     >
    //       {isSubmitting ? "更新中..." : "パスワードを更新"}
    //     </button>
    //   </div>
    // </form>
  );
}
