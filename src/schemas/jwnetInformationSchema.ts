import { z } from "zod";

export const jwnetInformationBaseSchema = z.object({
  jwnetId: z.string().length(7),
  ediKey: z.string().length(8).optional(),
  clientId: z.number().int().optional(),
  contractorId: z.number().int().optional(),
  siteId: z.number().int().optional(),
});

export type JwnetInformationFormData = z.infer<
  typeof jwnetInformationBaseSchema
>;
