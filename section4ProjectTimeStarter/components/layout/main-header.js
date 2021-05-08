import React from "react";

export default function mainHeader() {
  return (
    <header>
      <div>
        <Link href="/">NextEvents</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
