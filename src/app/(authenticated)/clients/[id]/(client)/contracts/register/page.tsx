import React from "react";
import Link from "next/link";
import getClientById from "@/utils/getClientById";
import ClientContractReistrationForm from "@/components/ClientContractRegistrationForm";
import getContractors from "@/utils/getContractors";

export default async function Page(
  props:
    {
      params: Promise<{ id: string }>,
      searchParams: Promise<{ [key: string]: string }>
    }) {

  const params = await props.params;
  const searchParams = await props.searchParams

  const id = Number(params.id);
  const client = await getClientById(id);
  const contractors = await getContractors();

  const waste = searchParams.waste;
  const type = searchParams.type;

  const titleWaste = () => {
    switch (waste) {
      case "msw":
        return "一廃"
      case "industrial-waste":
        return "産廃"
      default:
        return ""
    }
  }

  const titleType = () => {
    switch (type) {
      case "transportation":
        return "収運"
      case "treatment":
        return "処分"
      default:
        return ""
    }
  }



  if (!client) {
    return (
      <div className="mx-auto max-w-2xl">該当の事業者が見つかりません...</div>
    );
  }

  return (
    <div className="px-3">
      <div className="flex justify-between items-center">
        <h3 className="flex text-sm font-semibold items-center text-gray-700">
          登録
          <span className="text-gray-400 px-2">&gt;</span>
          {titleWaste()}
          <span className="text-gray-400 px-2">&gt;</span>
          {titleType()}
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
          waste={waste}
          type={type}
        />
      </div>
    </div>
  );
}
