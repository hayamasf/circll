"use client";

import React from "react";
import SubmitAndCancelButtons from "./SubmitAndCancelButtons";
import { userProfileUpdate } from "@/actions/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  userProfileSchema,
  UserProfileFormData,
} from "@/schemas/userProfileSchema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function UserProfileForm({
  displayName,
}: {
  displayName: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileFormData>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      displayName,
    },
  });

  const onCancel = () => {
    console.log("cancel");
  };

  const router = useRouter();

  const onSubmit = async (formData: UserProfileFormData) => {
    const result = await userProfileUpdate(formData);

    if (result.success) {
      toast.success("プロフィールを更新しました.");
      router.refresh();
    } else {
      toast.error(result.message)
    }
  };

  return (
    <form>
      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
        <label
          htmlFor="displayName"
          className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
        >
          表示名
        </label>
        <div className="mt-2 sm:col-span-2 sm:mt-0">
          <input
            id="displayName"
            type="text"
            {...register("displayName")}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:max-w-xs sm:text-sm/6"
          />
        </div>
        {errors.displayName?.message && (
          <p className="text-xs text-red-500 p-1">
            {errors.displayName?.message}
          </p>
        )}
      </div>
      <SubmitAndCancelButtons
        onCancel={onCancel}
        onSubmit={handleSubmit(onSubmit)}
      />
    </form>
  );
}
