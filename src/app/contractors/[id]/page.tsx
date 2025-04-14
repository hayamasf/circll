import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import getContractorById from "@/utils/getContractorById";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Tabs, TabItem } from "@/components/Tabs";
import JwnetInformationForm from "@/components/JwnetInformationForm";
import getMswLicenses from "@/utils/getMswLicenses";
import { getIndustrialWasteLicenses } from "@/utils/getIndustrialWasteLicenses";

import MswLicensesList from "@/components/MswLicensesList";
import IndustrialWasteLicensesList from "@/components/IndustrialWasteLicensesList";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const contractor = await getContractorById(id);

  const mswLicenses = await getMswLicenses(id);
  const industrialWasteLicenses = await getIndustrialWasteLicenses(id);

  const pages = [{ name: "業者", href: "/contractors", current: false }];

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
                {/* <div className="border-b pb-5">
                  <h3 className="py-3 text-sm font-semibold">一般廃棄物</h3>
                  <MswLicensesList licenses={mswLicenses} contractorId={id} />
                </div> */}
                <div className="pt-5">
                  <h3 className="py-3 text-sm font-semibold">産業廃棄物</h3>
                  <IndustrialWasteLicensesList
                    contractorId={id}
                    licenses={industrialWasteLicenses}
                  />
                </div>
              </TabItem>
              <TabItem label="JWNET情報">
                <JwnetInformationForm
                  label="加入者番号(収集運搬業者)"
                  jwnetId={1234511}
                />
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
