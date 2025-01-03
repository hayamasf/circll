"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import ClientSelectionModal from "./ClientSelectionModal";
import SubmitAndCancelButtons from "./SubmitAndCancelButtons";

export default function ContractReistrationForm() {
  const methods = useForm();
  const onSubmit = async (data: any) => console.log(data);

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
              onFocus={() => methods.setValue("isModalOpen", true)}
              readOnly={true}
              placeholder="排出事業者を選択してください."
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
            />
          </div>
        </div>
        <ClientSelectionModal isOpen={methods.watch("isModalOpen")}
          onClose={() => methods.setValue("isModalOpen", false)}
          onSelect={(client) => {
            methods.setValue("clientName", client.name)
            methods.setValue("clientId", client.id)
            methods.setValue("isModalOpen", false)
          }} />
        <SubmitAndCancelButtons onSubmit={methods.handleSubmit(onSubmit)} />
      </form>
    </FormProvider>
  );
}
