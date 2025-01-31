import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import getContractorById from "@/utils/getContractorById";
import Breadcrumbs from "@/components/Breadcrumbs";
import Accordion from "@/components/Accordion";
import { Tabs, TabItem } from "@/components/Tabs";
import JwnetInformationForm from "@/components/JwnetInformationForm";
import MswLicensesList from "@/components/MswLicensesList";
import { getIndustrialWasteLicenses } from "@/utils/getIndustrialWasteLicenses";

import IndustrialWasteLicensesList from "@/components/IndustrialWasteLicensesList";


export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const contractor = await getContractorById(id);
  const industrialWasteLicenses = await getIndustrialWasteLicenses(id);

  const pages = [{ name: "業者", href: "/contractors", current: false }];

  // const mswLicensesList = contractor
  //   ? [
  //     {
  //       title: "一般廃棄物処理業許可",
  //       content: <MswLicensesList contractorId={contractor?.id} />,
  //     },
  //   ]
  //   : [];

  // const industrialWasteLicensesList = contractor
  //   ? [
  //     {
  //       title: "産業廃棄物処理業許可",
  //       content: <IndustrialWasteLicensesList licenses={industrialWasteLicenses} />,
  //     },
  //   ]
  //   : [];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="py-5">
        <Breadcrumbs pages={pages} />
      </div>
      {contractor ? (
        <>
          <LegalEntityProfile entity={contractor} />
          <div className="my-10">
            <Tabs>
              <TabItem label="事業所">
                <p>これ</p>
              </TabItem>
              <TabItem label="許可情報">
                <h3 className="py-3 text-sm font-semibold">産業廃棄物</h3>
                <IndustrialWasteLicensesList contractorId={id} licenses={industrialWasteLicenses} />
                {/* <Accordion items={mswLicensesList} />
                <Accordion items={industrialWasteLicensesList} /> */}
              </TabItem>
              <TabItem label="JWNET情報">
                <JwnetInformationForm label="加入者番号(収集運搬業者)" jwnetId={1234511} />
              </TabItem>
            </Tabs>
          </div>

        </>
      ) : (
        "該当する業者が見つかりません..."
      )}
    </div>
  );
}
