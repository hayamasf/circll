import { prisma } from "@/lib/prisma";
import PageHeader from "@/components/PageHeader";
import ContractorEditForm from "@/components/ContractorEditForm";

async function fetchContractor(id: number) {
  try {
    const contractor = await prisma.contractor.findUnique({
      where: { id },
    });
    return contractor;
  } catch (error) {
    console.error("contractor fetch failed.");
    throw error;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const contractor = await fetchContractor(id);

  if (contractor) {
    return (
      <div className="container mx-auto max-w-md">
        <PageHeader title="業者情報の編集" />
        {contractor && <ContractorEditForm contractor={contractor} />}
      </div>
    );
  } else {
    return <div>データ取得中...</div>;
  }
}
