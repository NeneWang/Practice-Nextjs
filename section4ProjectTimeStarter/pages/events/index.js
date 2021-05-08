import React from 'react'

import {getAllEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list'

export default function AllEventsPage() {
    const events = getAllEvents();
    return (
        <div>
            <EventList items={events} />
        </div>
    )
}
