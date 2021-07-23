import classNames from "@src/utils/classNames";
import React, { ReactElement } from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function Button({ className, children }: Props): ReactElement {
  return <div className={classNames(["link", className])}>{children}</div>;
}
