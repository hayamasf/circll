import React from "react";
import Link from "next/link";
import getClientById from "@/utils/getClientById";
import ClientContractReistrationForm from "@/components/ClientContractRegistrationForm";
import getContractors from "@/utils/getContractors";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const client = await getClientById(id);
  const contractors = await getContractors();

  if (!client) {
    return (
      <div className="mx-auto max-w-2xl">該当の事業者が見つかりません...</div>
    );
  }

  return (
    <div className="px-3">
      <div className="flex justify-between items-center sm:px-8">
        <h3 className="text-sm font-semibold text-gray-700">
          新しく契約を登録します.
        </h3>
        <Link href={"/clients/" + id + "/contracts"}>
          <span className="text-sm text-blue-700 hover:underline">
            一覧に戻る
          </span>
        </Link>
      </div>
      <div className="mx-auto max-w-lg">
        <ClientContractReistrationForm
          clientId={id}
          contractors={contractors}
          waste="waste"
          type="type"
        />
      </div>
    </div>
  );
}
