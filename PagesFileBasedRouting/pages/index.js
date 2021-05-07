import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">My Portfolio</Link>
        </li>
        <li>
          <Link href="/client"> Clients </Link>
        </li>
      </ul>
    </div>
  );
}
