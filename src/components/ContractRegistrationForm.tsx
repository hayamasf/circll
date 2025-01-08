"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { normalizeString } from "@/utils/normalizeString";

import SubmitAndCancelButtons from "./SubmitAndCancelButtons";
import { formatEntityName } from "@/utils/formatEntityName";
import { Client } from "@prisma/client";

export default function ContractReistrationForm({
  clients,
}: {
  clients: Client[];
}) {
  const methods = useForm<any>({
    defaultValues: {
      clientId: null,
    },
  });

  const onSubmit = async (data: any) => console.log(data);
  const [search, setSearch] = useState("");
  const [selectedClientName, setSelectedClientName] = useState("");

  const filteredClients = clients.filter((client) =>
    normalizeString(client.name).includes(normalizeString(search)),
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-10">
        <div className="relative">
          <label
            htmlFor="clientName"
            className="block text-sm/6 font-medium text-gray-900"
          >
            排出事業者
          </label>
          <div className="mt-2">
            <input
              id="clientName"
              type="text"
              value={search || selectedClientName}
              placeholder="排出事業者名で検索"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value === "") {
                  setSelectedClientName("");
                  methods.setValue("clientId", null)
                }
              }}
            />
          </div>

          {/* 候補を表示するDropdown */}
          {search && filteredClients.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  onClick={() => {
                    methods.setValue("clientId", client.id);
                    setSelectedClientName(formatEntityName(client));
                    setSearch("");
                  }}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {formatEntityName(client)}
                </div>
              ))}
            </div>
          )}
        </div>
        <SubmitAndCancelButtons
          onCancel={() => {
            methods.reset();
            setSelectedClientName("");
            setSearch("");
          }
          }
          onSubmit={methods.handleSubmit(onSubmit)} />
      </form>
    </FormProvider>
  );
}
