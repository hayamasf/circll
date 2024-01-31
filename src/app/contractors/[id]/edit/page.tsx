import { prisma } from "@/lib/prisma";
import PageHeader from "@/components/PageHeader"
import ContractorForm from "@/components/ContractorForm"
import { updateContractor } from "@/actions/contractor";

export default async function Page({ params }: { params: { id: string } }) {

    const contractor = await prisma.contractor.findUnique({ where: { id: params.id } });

    if (!contractor) {
        return <div>該当する業者が見つかりませんでした.</div>
    }

    return (
        <div className="container mx-auto max-w-md">
            <PageHeader title="業者情報の編集" />
            <p>{contractor.name}</p>
            <ContractorForm onSubmit={updateContractor} />
        </div>
    )
}
