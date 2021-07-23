import { closeIconSize } from "@src/constants";
import React, { ReactElement } from "react";

interface Props {
  width?: number;
  height?: number;
}

export default function Close({
  width = closeIconSize.notMobile.cart.width,
  height = closeIconSize.notMobile.cart.height,
}: Props): ReactElement {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 0.75L1.5 9.25M1.5 0.75L9.75 9.25"
        stroke="#642C99"
        stroke-width="1.5"
      />
    </svg>
  );
}
