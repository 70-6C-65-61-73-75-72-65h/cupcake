import Minus from "@src/icons/Minus";
import Plus from "@src/icons/Plus";
import classNames from "@src/utils/classNames";
import React, { ReactElement } from "react";

interface Props {
  increase: any;
  decrease: any;
  amount: number;
}

export default function Amount({
  increase,
  decrease,
  amount,
}: Props): ReactElement {
  return (
    <div className="amount">
      <Minus onClick={decrease} />
      {amount} <Plus onClick={increase} />
    </div>
  );
}
