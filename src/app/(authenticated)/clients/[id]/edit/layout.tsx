import React from "react";

export default async function ClientEditLayout(props: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-2xl">
      {props.children}
    </div>
  )
}
