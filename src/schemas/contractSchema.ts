import { z } from "zod";

export const contractSchema = z.object({
  clientId: z.number().int().positive(),
  contractorId: z
    .number()
    .int()
    .positive()
    .nullable()
    .refine((val) => val !== null, { message: "業者を選択してください。" }),
  isAutoRenew: z.boolean(),
  contractItem: z.enum(["msw", "industrialWaste"], {
    required_error: "廃棄物の種類が必要です.",
  }),
  contractType: z.enum(["transportation", "treatment"], {
    required_error: "契約の種類が必要です.",
  }),
  endDate: z.union([z.string(), z.date()]).refine((val) => !!val, {
    message: "契約終了日は必須です.",
  }),
});

export type ContractFormData = z.infer<typeof contractSchema>;
