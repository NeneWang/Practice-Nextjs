import React from "react";
import Link from "next/link";

import classes from "./main-navigation.module.css";
import logo from './logo';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a href="">
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
