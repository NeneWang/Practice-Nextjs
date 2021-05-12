import { getFeaturedEvents } from "../helpers/api-util";
import React from "react";

import EventList from "../components/events/event-list";

export default function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>The Home Page</h1>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}
