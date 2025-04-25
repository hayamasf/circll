import { z } from "zod";

export const resetPasswordSchema = z
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

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
