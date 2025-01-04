"use client";

import React, { useState, } from "react";
import { useForm, FormProvider } from "react-hook-form";
import ClientSelectionModal from "./ClientSelectionModal";
import SubmitAndCancelButtons from "./SubmitAndCancelButtons";
import { formatEntityName } from "@/utils/formatEntityName";
import { Client } from "@prisma/client";

export default function ContractReistrationForm({ clients }: { clients: Client[] }) {

  const methods = useForm<any>({ defaultValues: { clientName: "", clientId: null } });
  const onSubmit = async (data: any) => console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-10">
        <div>
          <label
            htmlFor="clientId"
            className="block text-sm/6 font-medium text-gray-900"
          >
            排出事業者
          </label>
          <div className="mt-2">
            <input
              id="clientName"
              type="text"
              value={methods.watch("clientName")}
              onFocus={() => { setIsModalOpen(true) }}
              readOnly={true}
              placeholder="排出事業者を選択してください."
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
            />
          </div>
        </div>
        <ClientSelectionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          clients={clients}
          onSelect={(client) => {
            methods.setValue("clientName", formatEntityName(client))
            methods.setValue("clientId", client.id)
            setIsModalOpen(false)
          }}
        />
        <SubmitAndCancelButtons onSubmit={methods.handleSubmit(onSubmit)} />
      </form>
    </FormProvider>
  );
}
