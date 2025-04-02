"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { normalizeString } from "@/utils/normalizeString";

import SubmitAndCancelButtons from "./SubmitAndCancelButtons";
import { formatEntityName } from "@/utils/formatEntityName";
import { Client, Contractor } from "@prisma/client";
import DatePickerComponent from "./DatePickerComponent";
import ToggleButton from "./ToggleButton";

import { createContract } from "@/actions/contract";

export default function ContractReistrationForm({
  clients,
  contractors,
  waste,
  type,
}: {
  clients: Client[];
  contractors: Contractor[];
  waste: string;
  type: string;
}) {
  const methods = useForm<any>({
    defaultValues: {
      clientId: null,
      contractorId: null,
      isAutoRenew: true,
      waste: waste,
      type: type,
    },
    mode: "onSubmit",
  });

  const onSubmit = async (formData: any) => {
    console.log(formData);
    await createContract(formData);
  };

  const [clientSearch, setClientSearch] = useState("");
  const [contractorSearch, setContractorSearch] = useState("");
  const [selectedClientName, setSelectedClientName] = useState("");
  const [selectedContractorName, setSelectedContractorName] = useState("");

  const filteredClients = clients.filter((client) =>
    normalizeString(client.name).includes(normalizeString(clientSearch)),
  );

  const filteredContractors = contractors.filter((contractor) =>
    normalizeString(contractor.name).includes(
      normalizeString(contractorSearch),
    ),
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-10">
        <div className="grid gap-y-8">
          <div className="relative">
            <label
              htmlFor="clientName"
              className="block text-sm/6 font-medium text-gray-900"
            >
              排出事業者
            </label>
            <div className="mt-2">
              <input
                type="hidden"
                {...methods.register("clientId", {
                  required: "排出事業者を選択してください.",
                })}
              />
              <input
                id="clientName"
                type="text"
                value={clientSearch || selectedClientName}
                placeholder="排出事業者名で検索"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                onChange={(e) => {
                  setClientSearch(e.target.value);
                  if (e.target.value === "") {
                    setSelectedClientName("");
                    methods.setValue("clientId", null);
                  }
                }}
              />
            </div>
            {methods.formState.errors.clientId && (
              <p className="absolute text-sm text-red-500 p-1">
                {"排出事業者を選択してください."}
              </p>
            )}

            {/* 候補を表示するDropdown */}
            {clientSearch && filteredClients.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {filteredClients.map((client) => (
                  <div
                    key={client.id}
                    onClick={() => {
                      methods.setValue("clientId", client.id, {
                        shouldValidate: true,
                      });
                      setSelectedClientName(formatEntityName(client));
                      setClientSearch("");
                    }}
                    className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <span>{formatEntityName(client)}</span>
                    <span className="ml-5">{client.prefecture}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="contractorName"
              className="block text-sm/6 font-medium text-gray-900"
            >
              業者
            </label>
            <div className="mt-2">
              <input
                type="hidden"
                {...methods.register("contractorId", {
                  required: "者者を選択してください.",
                })}
              />
              <input
                id="contractorName"
                type="text"
                value={contractorSearch || selectedContractorName}
                placeholder="業者名で検索"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                onChange={(e) => {
                  setContractorSearch(e.target.value);
                  if (e.target.value === "") {
                    setSelectedContractorName("");
                    methods.setValue("contractorId", null);
                  }
                }}
              />
            </div>
            {methods.formState.errors.contractorId && (
              <p className="absolute text-sm text-red-500 p-1">
                {"業者を選択してください."}
              </p>
            )}

            {/* 候補を表示するDropdown */}
            {contractorSearch && filteredContractors.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {filteredContractors.map((contractor) => (
                  <div
                    key={contractor.id}
                    onClick={() => {
                      methods.setValue("contractorId", contractor.id, {
                        shouldValidate: true,
                      });
                      setSelectedContractorName(formatEntityName(contractor));
                      setContractorSearch("");
                    }}
                    className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <span>{formatEntityName(contractor)}</span>
                    <span className="ml-5">{contractor.prefecture}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 items-end">
            <div className="col-span-2 sm:col-span-1">
              <DatePickerComponent
                id="endDate"
                label="契約終了日"
                name="endDate"
                validation={{ required: "契約終了日は必須です." }}
                control={methods.control}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <ToggleButton
                label="契約期間の自動更新"
                description="しない場合はオフにする"
                name="isAutoRenew"
                defaultChecked={methods.getValues("isAutoRenew")}
              />
            </div>
          </div>
        </div>
        <SubmitAndCancelButtons
          onCancel={() => {
            methods.reset();
            setSelectedClientName("");
            setClientSearch("");
            setSelectedContractorName("");
            setContractorSearch("");
          }}
          onSubmit={methods.handleSubmit(onSubmit)}
        />
      </form>
    </FormProvider>
  );
}
