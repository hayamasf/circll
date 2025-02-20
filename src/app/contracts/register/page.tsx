import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import getClients from "@/utils/getClients";
import getContractors from "@/utils/getContractors";
import ContractReistrationForm from "@/components/ContractRegistrationForm";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const clients = await getClients();
  const contractors = await getContractors();

  const pages = [
    { name: "契約", href: "/contracts", current: false },
    { name: "登録", href: "", current: true },
  ];

  const waste = () => {
    switch (searchParams.waste) {
      case "msw":
        return "一般廃棄物";
      case "industrial":
        return "産業廃棄物";
      default:
        return "";
    }
  };

  const type = () => {
    switch (searchParams.type) {
      case "treatment":
        return "処理";
      case "transportation":
        return "収集運搬";
      case "disposal":
        return "処分";
      default:
        return "";
    }
  };

  return (
    <div className="mx-auto max-w-lg">
      <div className="pt-3 mb-10">
        <Breadcrumbs pages={pages} />
      </div>
      <PageHeader title={waste() + type() + "契約"} />
      <ContractReistrationForm clients={clients} contractors={contractors} />
    </div>
  );
}
