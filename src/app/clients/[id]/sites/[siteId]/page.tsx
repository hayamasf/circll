import React from "react";

export default function Page({ params }: any) {
  const id = Number(params.id);
  const siteId = Number(params.siteId);

  return <div>{id + "&" + siteId}</div>;
}
