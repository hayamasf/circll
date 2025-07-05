import { string, z } from "zod";

export const LegalEntitySchema = z.object({
  id: z.number(),
  createdAt: z.coerce.date(),
  createdBy: z.string(),
  updatedAt: z.coerce.date(),
  updatedBy: z.string().nullable().optional(),
  entityType: z.string().nullable().optional(),
  isPrefixEntityType: z.boolean().nullable().optional(),
  name: z.string(),
  representativeTitle: z.string().nullable().optional(),
  representativeName: z.string().nullable().optional(),
  tradeName: z.string().nullable().optional(),
  postalCode: z.string().regex(/^\d{7}$/, { message: "郵便番号は7桁の数字で入力してください。" }),
  prefecture: z.string().min(3, {message: "都道府県名は最低3文字です."}).max(
    4, {message: "都道府県名は最大4文字です."}
  ),
  city: z.string(),
  town: z.string(),
  address: z.string(),
  address2: z.string().nullable().optional(),
})

export type LegalEntityFormData = z.infer<typeof LegalEntitySchema>
