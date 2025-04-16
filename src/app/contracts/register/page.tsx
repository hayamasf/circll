import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import getClients from "@/utils/getClients";
import getContractors from "@/utils/getContractors";
import ContractReistrationForm from "@/components/ContractRegistrationForm";

export default async function Page(props: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const searchParams = await props.searchParams;
  const clients = await getClients();
  const contractors = await getContractors();

  const pages = [
    { name: "契約", href: "/contracts", current: false },
    { name: "登録", href: "", current: true },
  ];

  const waste = searchParams.waste;
  const type = searchParams.type;

  const titleWaste = () => {
    switch (waste) {
      case "msw":
        return "一般廃棄物";
      case "industrial-waste":
        return "産業廃棄物";
      default:
        return "";
    }
  };

  const titleType = () => {
    switch (type) {
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
      <PageHeader title={titleWaste() + titleType() + "契約"} />
      <ContractReistrationForm
        clients={clients}
        contractors={contractors}
        waste={waste}
        type={type}
      />
    </div>
  );
}
