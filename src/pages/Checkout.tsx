import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { closeIconSize } from "@src/constants";

import React, { ReactElement } from "react";
import CheckoutWrapper from "@src/components/CheckoutWrapper";

interface Props {}

export default function Checkout({}: Props): ReactElement {
  const isMobile = useMediaQuery("(max-width: 480px)");
  return <CheckoutWrapper illustration>div.order-</CheckoutWrapper>;
}
