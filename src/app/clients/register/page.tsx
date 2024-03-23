import PageHeader from "@/components/PageHeader";
import LegalEntityTypeSelector from "@/components/LegalEntityTypeSelector";

export default function Page() {
  return (
    <div className="mx-auto max-w-sm">
      <PageHeader title="排出事業者の登録" />
      <LegalEntityTypeSelector />
    </div>
  );
}
