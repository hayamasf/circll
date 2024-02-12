import React from "react";

type SubmitButtonProps = {
  label: string;
  disabled?: boolean;
};

const SubmitButton = ({ label, disabled }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`rounded-md ${
        disabled
          ? "bg-slate-400 cursor-not-allowed"
          : "bg-slate-800 hover:bg-slate-600"
      } px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
