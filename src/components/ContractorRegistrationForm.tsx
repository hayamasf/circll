import TextInput from "./TextInput";

const ContractorRegistrationForm = () => {
  return (
    <div className="mt-10 grid gap-y-8">
      <TextInput
        label="業者名"
        id="name"
        name="name"
        width="sm:w-32"
        placeholder="業者名"
      />
      <TextInput
        label="これ"
        id="id"
        name="id"
        width="sm:w-32"
        placeholder="これ"
      />
      <TextInput
        label="郵便番号"
        id="zipCode"
        name="zipCode"
        width="sm:w-32"
        placeholder="111-2345"
      />
    </div>
  );
};

export default ContractorRegistrationForm;
