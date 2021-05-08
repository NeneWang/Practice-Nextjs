import { Fragment } from "react";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";

export default function AllEventsPage() {
  const events = getAllEvents();

  function findEventsHandler(year, month) {}

  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
}
