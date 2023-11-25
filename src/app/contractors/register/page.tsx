import PageHeader from "@/components/PageHeader";
import ContractorRegistrationForm from "@/components/ContractorRegistrationForm";
const RegisterPage = () => {
  return (
    <div className="mx-auto max-w-sm">
      <PageHeader title="業者の新規登録" />
      <ContractorRegistrationForm />
    </div>
  );
};

export default RegisterPage;
