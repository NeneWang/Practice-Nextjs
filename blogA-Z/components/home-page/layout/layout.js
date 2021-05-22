import { Fragment } from "react";

export default function layout() {
  return (
    <Fragment>
      <main>{props.children}</main>
    </Fragment>
  );
}
