import React from "react";
import Link from "next/link";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: numeric,
  });
  return (
    <li>
      <img src="" alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{date}</time>
          </div>
          <div>
            <address>ADDRESS</address>
          </div>
          <div>
            <Link href="/">Explore Event</Link>
          </div>
        </div>
      </div>
    </li>
  );
}
