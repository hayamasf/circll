import React from "react";

export default async function ClientSitesLayout(props: {
  children: React.ReactNode
}) {
  return (
    <div>
      {props.children}
    </div>
  )
}