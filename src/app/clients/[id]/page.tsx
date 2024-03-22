import React from "react";
import { formatDateTime } from "@/utils/dateUtils";
import EditLink from "@/components/EditLink";
import { prisma } from "@/lib/prisma";

async function fetchClient(id: number) {
  try {
    const client = await prisma.client.findUnique({
      where: { id },
    });
    return client;
  } catch (error) {
    console.error("client fetch failed.", error);
    throw error;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const client = await fetchClient(id);

  if (client) {
    return (
      <div className="container mx-auto max-w-3xl">
        <div className="px-4 sm:px-0">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              {client.name}
            </h3>
            <EditLink href={`/clients/${client.id}/edit`} />
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {client.title} {client.representative}
          </p>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            〒 {client.zipCode}
          </p>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {client.prefecture}
            {client.city}
            {client.town}
            {client.address}
          </p>
          {client.address2 && (
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              {client.address2}
            </p>
          )}
        </div>
        <div className="mt-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex border-t border-gray-100 px-4 py-6 text-xs sm:col-span-1 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">登録</dt>
              <dd className="ml-3 leading-6 text-gray-700">
                {formatDateTime(client.createdAt)}
              </dd>
            </div>
            <div className="flex text-xs border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">更新</dt>
              <dd className="ml-3 leading-6 text-gray-700">
                {client.createdAt.toLocaleString("ja-JP")}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
  } else {
    <div>顧客データを取得中...</div>;
  }
}
