import { Fragment } from "react";

export default function Layout(props) {
  return (
    <Fragment>
        
      <main>{props.children}</main>
    </Fragment>
  );
}
