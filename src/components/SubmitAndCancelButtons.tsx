import React from "react";

export default function SubmitAndCancelButtons({
  onSubmit,
  onCancel,
}: {
  onSubmit: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="mt-12 flex items-center justify-end gap-x-6">
      <button
        type="button"
        onClick={onCancel}
        className="rounded-md px-7 py-2 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 hover:cursor-pointer"
      >
        キャンセル
      </button>
      <button
        type="button"
        onClick={onSubmit}
        className="rounded-md bg-gray-800 px-7 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        登録
      </button>
    </div>
  );
}
