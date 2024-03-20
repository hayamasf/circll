import { prisma } from "@/lib/prisma";
import PageHeader from "@/components/PageHeader";
import ContractorEditForm from "@/components/ContractorEditForm";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  if (isNaN(id)) {
    console.error("idは整数のはずです.");
    return;
  }

  const contractor = await prisma.contractor.findUnique({
    where: { id: id },
  });

  return (
    <div className="container mx-auto max-w-md">
      <PageHeader title="業者情報の編集" />
      {contractor && <ContractorEditForm contractor={contractor} />}
    </div>
  );
}
