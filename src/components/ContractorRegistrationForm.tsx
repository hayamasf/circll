"use client";

import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

const ContractorRegistrationForm = () => {

  const onSubmit = async () => {
    console.log("test");
  };

  const handleReset = () => {
    console.log("キャンセル");
  }


  return (
    <>
      <div className="mt-10 grid gap-y-8">
        <TextInput
          label="業者名"
          id="name"
          name="name"
          width=""
          placeholder="業者名"
        />
        <TextInput label="これ" id="id" name="id" width="" placeholder="これ" />
        <TextInput
          label="郵便番号"
          id="zipCode"
          name="zipCode"
          width="w-24"
          placeholder="111-2345"
        />
      </div>
      <div className="mt-14 grid gap-y-5">
        <SubmitButton label="登録" onClick={onSubmit} />
        <CancelButton label="キャンセル" onClick={handleReset} />
      </div>
    </>
  );
};

export default ContractorRegistrationForm;
