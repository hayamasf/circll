import { z } from "zod";

export const mswLicenseSchema = z.object({
  contractorId: z.coerce.number(),
  prefectureId: z.coerce.number().min(1, "都道府県は必須です.").nullable(),
  municipalityId: z.coerce.number().min(1, "市区町村は必須です.").nullable(),
  type: z.enum(["1", "2"]),
  expirationDate: z
    .union([z.string(), z.date()])
    .refine((val) => val !== "", { message: "有効期限は必須です." }),
  licenseUrl: z.string().url("正しいURLを入力してください."),
});

export type MswLicenseFormData = z.infer<typeof mswLicenseSchema>;
