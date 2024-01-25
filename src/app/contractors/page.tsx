import PageHeader from "@/components/PageHeader";
import ContractorsList from "@/components/ContractorsList";
import LinkButton from "@/components/LinkButton";

export default function Page() {
  return (
    <>
      <div className="flex justify-between mb-10 items-center">
        <PageHeader title="業者" />
        <LinkButton href="/contractors/register" children={"新規登録"} />
      </div>
      <ContractorsList />
    </>
  );
}
