"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUser } from "@/actions/auth";
import { passwordSchema, PasswordFormValues } from "@/schemas/passwordSchema";
import { toast } from "sonner";

export default function PasswordForm({
  redirectPath,
}: {
  redirectPath: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormValues>({ resolver: zodResolver(passwordSchema) });

  const onSubmit = async (formData: PasswordFormValues) => {
    const result = await updateUser(formData);

    if (result.success) {
      toast.success(result.message ?? "パスワード設定完了!");

      setTimeout(() => {
        window.location.href = redirectPath;
      }, 2000);
    } else {
      toast.error(result.message ?? "パスワードの更新に失敗しました.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm/6 font-medium text-gray-900"
        >
          パスワード
        </label>
        <div className="mt-2">
          <input
            tabIndex={1}
            id="newPassword"
            {...register("password")}
            type="password"
            placeholder="英字と数字の両方で８文字以上"
            required
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
          />
          {errors.password && (
            <p className="pt-1 pl-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm/6 font-medium text-gray-900"
        >
          パスワード（確認用）
        </label>
        <div className="mt-2">
          <input
            tabIndex={2}
            id="confirmPassword"
            {...register("confirmPassword")}
            type="password"
            placeholder="もう一度入力して下さい"
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
          設定
        </button>
      </div>
    </form>
  );
}
