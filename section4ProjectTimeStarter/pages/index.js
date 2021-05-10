import { getFeaturedEvents } from "../dummy-data";
import React from "react";

import EventList from "../components/events/event-list";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>The Home Page</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps(){
  return {
    props: {}
  }
}
