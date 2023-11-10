import React from "react";

type Bars3IconProps = {
  className?: string;
  ariaHidden?: boolean;
};

const Bars3Icon: React.FC<Bars3IconProps> = ({ className, ariaHidden }) => {
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
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export default Bars3Icon;
