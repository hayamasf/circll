import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import getClientById from "@/utils/getClientById";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Tabs, TabItem } from "@/components/Tabs";
import SitesList from "@/components/SitesList";
import { getJwnetInformationByClientId } from "@/utils/jwentInformation";
import JwnetInformationForm from "@/components/JwnetInformationForm";

export default async function Page(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const id = Number(params.id);
  const contractor = await getClientById(id);
  const offset = Number(searchParams.offset ?? 1);
  const limit = Number(searchParams.limit ?? 10);
  const jwnetInformation = await getJwnetInformationByClientId(id)

  const pages = [{ name: "排出事業者", href: "/clients", current: false }];

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
                <SitesList offset={offset} limit={limit} clientId={id} />
              </TabItem>
              <TabItem label="JWNET情報">
                <JwnetInformationForm jwnetInformation={jwnetInformation ?? undefined} />
              </TabItem>
            </Tabs>
          </div>
        </>
      ) : (
        "該当する排出事業者が見つかりません..."
      )}
    </div>
  );
}
