"use client";

import React, { useState } from "react";
import { Client } from "@prisma/client";
import { normalizeString } from "@/utils/normalizeString";
import { formatEntityName } from "@/utils/formatEntityName";

export default function ClientSelectionModal({
  isOpen,
  onClose,
  onSelect,
  clients,
}: {
  isOpen: boolean;
  onClose: () => void;
  clients: Client[]
  onSelect: (client: Client) => void;
}) {

  const [search, setSearch] = useState("");
  // const [clients, setClients] = useState<any>([]);

  const filteredClients = clients.filter((client) =>
    normalizeString(client.name).includes(normalizeString(search))
  )

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="p-4">
          <h2 className="text-base font-semibold text-gray-900">排出事業者を検索</h2>
          <input
            type="text"
            placeholder="検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-2 block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="max-h-60 overflow-y-auto">
          {search && filteredClients.map((client: Client) => (
            <div
              key={client.id}
              onClick={() => onSelect(client)}
              className="cursor-pointer text-sm px-4 py-2 hover:bg-gray-100"
            >
              {formatEntityName(client)}
            </div>
          ))}
        </div>
        <div className="flex justify-end p-4">
          <button onClick={() => {
            setSearch("");
            onClose();
          }} className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white">
            閉じる
          </button>
        </div>
      </div>
    </div>
  )
}
