"use client";

import React, { useEffect, useState } from "react";
import {
  UseFormRegister,
  FieldErrors,
  UseFormUnregister,
} from "react-hook-form";
import { LegalEntity } from "@/types/types";

import { classNames } from "@/utils/classNames";

import CorporateEntityInputs from "./CorporateEntityInputs";
import SoleProprietorInputs from "./SoleProprietorInputs";

export default function LegalEntitySelector({
  register,
  unregister,
  errors,
}: {
  register: UseFormRegister<LegalEntity>;
  unregister: UseFormUnregister<LegalEntity>;
  errors: FieldErrors<LegalEntity>;
}) {
  const [types, setTypes] = useState([
    { id: 1, name: "会社など法人", current: true },
    { id: 2, name: "個人事業主", current: false },
  ]);

  const toggleCurrent = (tabId: number) => {
    setTypes((prevTypes) =>
      prevTypes.map((type) => ({ ...type, current: type.id === tabId })),
    );
  };

  const selectedType = types.find((type) => {
    return type.current;
  });

  useEffect(() => {
    if (selectedType?.id === 1) {
      unregister("tradeName");
    }
    if (selectedType?.id === 2) {
      unregister("entityType");
      unregister("isPrefixEntityType");
      unregister("title");
      unregister("representative");
    }
  }, [selectedType]);

  return (
    <>
      <div>
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            <ul className="flex w-full">
              {types.map((type) => (
                <li
                  key={type.id}
                  className={classNames(
                    type.current
                      ? "border-gray-500 text-gray-800"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 hover: cursor-pointer",
                    "w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium",
                  )}
                  aria-current={type.current ? "page" : undefined}
                  onClick={() => toggleCurrent(type.id)}
                >
                  {type.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {selectedType?.id === 1 && <CorporateEntityInputs />}
      {selectedType?.id === 2 && <SoleProprietorInputs />}
    </>
  );
}
