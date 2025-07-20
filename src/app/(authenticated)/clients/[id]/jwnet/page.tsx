import React from "react";
import { getJwnetInformationByClientId } from "@/utils/jwentInformation";
import JwnetInformationForm from "@/components/JwnetInformationForm";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const jwnetInformation = await getJwnetInformationByClientId(id);

  return <JwnetInformationForm jwnetInformation={jwnetInformation} />;
}
