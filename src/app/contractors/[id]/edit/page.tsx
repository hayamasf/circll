import PageHeader from "@/components/PageHeader"
import ContractorForm from "@/components/ContractorForm"

export default function Page() {

    return (
        <div className="container mx-auto max-w-md">
            <PageHeader title="業者情報の編集" />
            {/* <p>{contractor.name}</p> */}
            <ContractorForm />
        </div>
    )

}
