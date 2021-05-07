import { getFeaturedEvents } from "../dummy-data";
import React from "react";

export default function HomePage() {
    const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  );
}
