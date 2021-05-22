import { Fragment } from "react";

import MainNavigation from './main-navigation';

export default function layout(props) {
  return (
    <Fragment>
      <main>{props.children}</main>
    </Fragment>
  );
}
