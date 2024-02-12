import { prisma } from "@/lib/prisma";
import PageHeader from "@/components/PageHeader";
import ContractorEditForm from "@/components/ContractorEditForm";

export default async function Page({ params }: { params: { id: string } }) {
  const contractor = await prisma.contractor.findUnique({
    where: { id: params.id },
  });

  return (
    <div className="container mx-auto max-w-md">
      <PageHeader title="業者情報の編集" />
      {contractor && <ContractorEditForm contractor={contractor} />}
    </div>
  );
}
