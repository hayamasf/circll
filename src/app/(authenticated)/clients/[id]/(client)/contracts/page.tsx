import React from "react";
import Link from "next/link";
import getClientById from "@/utils/getClientById";
import DropdownNavigationMenu from "@/components/DropdownNavigationMenu";
import ContractsByClient from "@/components/ContractsByClient";

const menuSections = [
  // {
  //   id: 1,
  //   items: [
  //     {
  //       id: 1,
  //       text: "一般廃棄物処理",
  //       href: "/contracts/register?waste=msw&type=treatment",
  //     },
  //     {
  //       id: 2,
  //       text: "一般廃棄物処分",
  //       href: "/contracts/register?waste=msw&type=???",
  //     },
  //   ],
  // },
  {
    id: 2,
    items: [
      {
        id: 1,
        text: "産業廃棄物収集運搬",
        href: "./contracts/register?waste=industrial-waste&type=transportation",
      },
      {
        id: 2,
        text: "産業廃棄物処分",
        href: "./contracts/register?waste=industrial-waste&type=treatment",
      },
    ],
  },
  // {
  //   id: 3,
  //   items: [
  //     { id: 1, text: "専ら物", href: "#" },
  //     { id: 2, text: "売買契約", href: "#" },
  //   ],
  // },
];

export default async function Page(props:
  {
    params: Promise<{ id: string }>,
    searchParams: Promise<{ [key: string]: string }>
  }) {
  const params = await props.params;

  const id = Number(params.id);
  const client = await getClientById(id);

  if (!client) {
    return (
      <div className="mx-auto max-w-2xl">該当の事業者が見つかりません...</div>
    );
  }

  return (
    <div>
      <div className="flex justify-between px-3">
        <h3>契約一覧</h3>
        <DropdownNavigationMenu menuSections={menuSections} />
      </div>
      <div>
        <ContractsByClient clientId={id} />
      </div>
    </div>
  );
}
