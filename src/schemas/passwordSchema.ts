import { z } from "zod";

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "8文字以上で設定して下さい." })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]*$/, {
        message: "英字と数字の両方を含めて下さい.",
      }),
    confirmPassword: z.string(),
  })
  .refine((formData) => formData.password === formData.confirmPassword, {
    message: "パスワードが一致しません.",
    path: ["confirmPassword"],
  });

export type PasswordFormValues = z.infer<typeof passwordSchema>;
