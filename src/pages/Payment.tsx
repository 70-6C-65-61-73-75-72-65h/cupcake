import { useMediaQuery } from "@src/hooks/useMediaQuery";
import { closeIconSize } from "@src/constants";

import React, { ReactElement } from "react";

interface Props {}

export default function Payment({}: Props): ReactElement {
  const isMobile = useMediaQuery("(max-width: 480px)");
  return <div className="payment"></div>;
}
