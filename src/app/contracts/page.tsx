import React, { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import Loading from "../loading";
import DropdownNavigationMenu from "@/components/DropdownNavigationMenu";
import IndustrialWasteContractsList from "@/components/IndustrialWasteContractsList";
import getIndustrialWasteContracts from "@/utils/getIndustrialWasteContracts";
import { Tabs, TabItem } from "@/components/Tabs";

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
  //       href: "/contracts/register?waste=msw&type=disposal",
  //     },
  //   ],
  // },
  {
    id: 2,
    items: [
      {
        id: 1,
        text: "産業廃棄物収集運搬",
        href: "/contracts/register?waste=industrial-waste&type=transportation",
      },
      {
        id: 2,
        text: "産業廃棄物処分",
        href: "/contracts/register?waste=industrial-waste&type=disposal",
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

export default async function Page() {
  const industrialWasteContracts = await getIndustrialWasteContracts();

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="契約" />
        <DropdownNavigationMenu menuSections={menuSections} />
      </div>

      <Suspense fallback={<Loading />}>
        <Tabs>
          <TabItem label="産業廃棄物">
            <IndustrialWasteContractsList />
          </TabItem>

          <TabItem label="">
            <p></p>
          </TabItem>
        </Tabs>
        {/* <ContractsList /> */}

        {/* <ContractTable title="産業廃棄物" contracts={industrialWasteContracts} /> */}
      </Suspense>
    </div>
  );
}
