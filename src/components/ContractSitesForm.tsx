"use client";

import React from "react";
import { Site } from "@prisma/client";
import Card from "./Card";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";
import {
  contractSitesSchema,
  ContractSitesFormData,
} from "@/schemas/contractSitesSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateIndustrialWasteContractSites } from "@/actions/contract";

export default function ContractSitesForm({
  contractId,
  sites,
}: {
  contractId: number;
  sites: Site[];
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm<ContractSitesFormData>({
    resolver: zodResolver(contractSitesSchema),
    defaultValues: {
      siteIds: [],
    },
  });

  const selectedSiteIds = watch("siteIds");
  const isDisabled = !isDirty || selectedSiteIds.length === 0;

  const onSubmit = async (formData: ContractSitesFormData) => {
    console.log(formData);
    await updateIndustrialWasteContractSites(contractId, formData.siteIds);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-7 flex items-center justify-between">
          <h4 className="font-semibold">対象の事業所</h4>
          <SubmitButton label="保存" disabled={isDisabled} />
        </div>

        <fieldset>
          <legend className="sr-only">契約対象の事業所</legend>
          {errors.siteIds && (
            <p className="text-sm text-red-600">{errors.siteIds.message}</p>
          )}

          <div className="space-y-5 text-sm">
            {sites.map((site) => (
              <div key={site.id} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={"site-" + site.id}
                  value={String(site.id)}
                  {...register("siteIds")}
                  className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-1"
                />
                <div className="text-sm leading-6">
                  <label
                    htmlFor={"site-" + site.id}
                    className="font-medium text-gray-800"
                  >
                    {site.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </form>
    </Card>
  );
}
