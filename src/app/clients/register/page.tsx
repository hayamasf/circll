import PageHeader from "@/components/PageHeader";
import ClientForm from "@/components/ClientForm";

export default function Page() {
    return (
        <div className="mx-auto max-w-sm">
            <PageHeader title="排出事業者の新規登録" />
            <ClientForm />
        </div>
    );
}
