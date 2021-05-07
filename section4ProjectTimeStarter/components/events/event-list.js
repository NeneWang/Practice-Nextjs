import React from "react";
import EventItem from './event-item';

export default function EventList(props) {
  const { items } = props;
  return <div>{items.map(event => <EventItem />)}</div>;
}
