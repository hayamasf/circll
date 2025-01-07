import React from "react";
import { useFormContext } from "react-hook-form";

export default function SubmitAndCancelButtons({
  onSubmit,
}: {
  onSubmit: () => void;
}) {
  const { reset } = useFormContext();
  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-md px-3 py-2 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
      >
        キャンセル
      </button>
      <button
        type="button"
        onClick={onSubmit}
        className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        登録
      </button>
    </div>
  );
}