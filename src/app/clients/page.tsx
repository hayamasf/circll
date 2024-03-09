import PageHeader from "@/components/PageHeader";
import ClientsList from "@/components/ClientsList";
import LinkButton from "@/components/LinkButton";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="排出事業者" />
        <LinkButton href="/clients/register">新規登録</LinkButton>
      </div>
      <ClientsList />
    </div>
  );
}
