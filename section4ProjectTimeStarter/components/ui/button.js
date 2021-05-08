import React from "react";
import Link from 'next/link';

import classes from "./button.module.css";

export default function Button(props) {
  return (
    <Link href={props.link}>
      <a className={classes.btn}> {props.children}</a>
    </Link>
  );

  return <button  className={classes.btn} onCLick={porps.onCLick} >{props.children}</button>
}
