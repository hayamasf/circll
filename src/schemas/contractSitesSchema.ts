import { z } from "zod";

export const contractSitesSchema = z.object({
  siteIds: z.array(z.string()),
});

export type ContractSitesFormData = z.infer<typeof contractSitesSchema>;
