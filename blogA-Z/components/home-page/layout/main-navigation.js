import React from "react";
import Link from "next/link";

export default function MainNavigation() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
