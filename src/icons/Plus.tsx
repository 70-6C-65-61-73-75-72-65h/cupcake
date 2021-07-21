import React, { ReactElement } from "react";

interface Props {
  onClick?: any;
}

export default function Plus({ onClick }: Props): ReactElement {
  return (
    <div className="plus" onClick={onClick}>
      <svg
        width="9"
        height="10"
        viewBox="0 0 9 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 4.73684H9M4.5 0V10" stroke="#642C99" stroke-width="2" />
      </svg>
    </div>
  );
}
