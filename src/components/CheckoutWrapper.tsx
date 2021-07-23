import { checkoutHeader } from "@src/constants";
import React, { ReactElement } from "react";

interface Props {
  [index: string]: any;
}

export default function CheckoutWrapper({
  children,
  illustration,
}: Props): ReactElement {
  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__header-text"></div>
        {/* absolute */}
        <div className="checkout__header-illustration">{illustration}</div>
        <div className="checkout__header-primary">{checkoutHeader.primary}</div>
        <div className="checkout__header-secondary">
          {checkoutHeader.secondary}
        </div>
      </div>
      <div className="checkout__content">{children}</div>
    </div>
  );
}
