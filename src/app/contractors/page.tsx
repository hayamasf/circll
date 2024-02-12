import PageHeader from "@/components/PageHeader";
import ContractorsList from "@/components/ContractorsList";
import LinkButton from "@/components/LinkButton";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="業者" />
        <LinkButton href="/contractors/register">新規登録</LinkButton>
      </div>
      <ContractorsList />
    </div>
  );
}
