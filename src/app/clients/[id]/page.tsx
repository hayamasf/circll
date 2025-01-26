import React from "react";
import LegalEntityProfile from "@/components/LegalEntityProfile";
import getClientById from "@/utils/getClientById";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Tabs, TabItem } from "@/components/Tabs";
import SitesList from "@/components/SitesList";
import JwnetInformationForm from "@/components/JwnetInformationForm";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = Number(params.id);
  const client = await getClientById(id);
  const pages = [{ name: "排出事業者", href: "/clients", current: true }];

  const offset = Number(searchParams.offset ?? 1);
  const limit = Number(searchParams.limit ?? 10);

  if (client) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="pt-3 pb-10">
          <Breadcrumbs pages={pages} />
        </div>
        <LegalEntityProfile entity={client} />
        <div className="my-10">
          <Tabs>
            <TabItem label="事業所">
              <SitesList clientId={id} offset={offset} limit={limit} />
            </TabItem>
            <TabItem label="JWNET情報"><JwnetInformationForm /></TabItem>
          </Tabs>
        </div>
      </div>
    );
  }
}
