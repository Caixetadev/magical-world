import React from "react";
import { Fragment } from "react";

export default function AppLayout({ children }: any) {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
}
