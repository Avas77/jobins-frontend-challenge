import React from "react";

const ICChevronUp = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 13L10 8L15 13"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ICChevronUp;
