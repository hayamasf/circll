"use client";

import React, { useState } from "react";
import JwnetInformationForm from "./JwnetInformationForm";
import { JwnetInformationFormData } from "@/schemas/jwnetInformationSchema";

export default function JwnetInformationFormsContainer({
  initialData = [],
}: {
  initialData?: JwnetInformationFormData[];
}) {
  const [forms, setForms] = useState<JwnetInformationFormData[]>(
    initialData.length > 0 ? initialData : [{ jwnetId: "", ediKey: "" }],
  );

  const handleAddForm = () => {
    if (forms.length < 2) {
      setForms([...forms, { jwnetId: "", ediKey: "" }]);
    }
  };

  const handleRemoveForm = (index: number) => {
    setForms(forms.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {forms.map((form, index) => (
        <div key={index} className="relative p-4 rounded-md">
          <JwnetInformationForm jwnetInformation={form} />
          {forms.length === 2 && index === 1 && initialData.length < 2 && (
            <button
              type="button"
              onClick={() => handleRemoveForm(index)}
              className="absolute top-6 right-6 text-sm text-red-500 hover:underline hover:cursor-pointer"
            >
              削除
            </button>
          )}
        </div>
      ))}
      {forms.length < 2 && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleAddForm}
            className="text-sm text-blue-600 hover:underline hover:cursor-pointer"
          >
            情報を追加
          </button>
        </div>
      )}
    </div>
  );
}
