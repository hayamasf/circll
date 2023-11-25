import React from "react";

type SubmitButtonProps = {
  label: string;
  onClick: () => void;
};

const SubmitButton = ({ label, onClick }: SubmitButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
