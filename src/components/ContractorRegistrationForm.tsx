"use client"

import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

import { onSubmit } from "@/hooks/ContractorRegistrationForm";

const ContractorRegistrationForm = () => {

  const handleReset = () => {
    console.log('リセット')
  }

  return (
    <form className="mt-10">
      <div className="grid gap-y-8">
        <TextInput
          label="業者名"
          id="name"
          name="name"
          width=""
          placeholder="業者名"
        />
        <div className="grid grid-cols-2 gap-x-3">
          <TextInput
            label="代表者役職名"
            id="title"
            name="title"
            width=""
            placeholder="代表取締役"
          />
          <TextInput
            label="代表者氏名"
            id="name"
            name="name"
            width=""
            placeholder="小松武司"
          />

        </div>
        <hr className="my-2" />
        <div className="grid grid-cols-2 gap-x-3">
          <TextInput
            label="郵便番号"
            id="zipCode"
            name="zipCode"
            width=""
            placeholder="104-0032"
          />
          <TextInput
            label="都道府県"
            id="prefecture"
            name="prefecture"
            width=""
            placeholder="東京都"
          />

        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <TextInput
            label="市区町村"
            id="city"
            name="city"
            width=""
            placeholder="中央区"
          />
          <TextInput
            label="町域"
            id="town"
            name="town"
            width=""
            placeholder="八丁堀"
          />
        </div>
        <TextInput
          label="丁目、番地以下"
          id="address"
          name="address"
          width=""
          placeholder="三丁目12番8号"
        />

        <TextInput
          label="ビル名など"
          id="address2"
          name="address2"
          width=""
          placeholder="HF八丁堀ビル"
        />

      </div>
      <div className="mt-10 grid gap-y-5">
        <SubmitButton label="登録" onClick={onSubmit} />
        <CancelButton label="キャンセル" onClick={handleReset} />
      </div>

    </form>
  );
};

export default ContractorRegistrationForm;
