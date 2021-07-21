import React, { ReactElement } from "react";

interface Props {
  onClick?: any;
}

export default function Minus({ onClick }: Props): ReactElement {
  return (
    <div className="minus" onClick={onClick}>
      <svg
        width="9"
        height="2"
        viewBox="0 0 9 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 1H0" stroke="#642C99" stroke-width="2" />
      </svg>
    </div>
  );
}
