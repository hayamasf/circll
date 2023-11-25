import React from "react";

type CancelButtonProps = {
  label: string;
  onClick: () => void;
};

const CancelButton = ({ label, onClick }: CancelButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CancelButton;
