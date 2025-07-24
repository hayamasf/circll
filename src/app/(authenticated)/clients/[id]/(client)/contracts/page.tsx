import React from "react";
import Link from "next/link";
import getClientById from "@/utils/getClientById";
import PlusButton from "@/components/PlusButton";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const client = await getClientById(id);

  if (!client) {
    return (
      <div className="mx-auto max-w-2xl">該当の事業者が見つかりません...</div>
    );
  }

  return (
    <Link
      href={"/clients/" + id + "/contracts/register"}
      className="flex justify-center"
    >
      <PlusButton iconClassName="h-4 w-4" />
    </Link>
  );
}
