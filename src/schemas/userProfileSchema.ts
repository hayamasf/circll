import { z } from "zod";

export const userProfileSchema = z.object({
  displayName: z.string().min(1, "表示名は必須です."),
});

export type UserProfileFormData = z.infer<typeof userProfileSchema>;
