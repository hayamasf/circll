import React from "react";

type XMarkIconProps = {
  className?: string;
  ariaHidden?: boolean;
};

const XMarkIcon: React.FC<XMarkIconProps> = ({ className, ariaHidden }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      {...(ariaHidden ? { "aria-hidden": true } : {})}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default XMarkIcon;
