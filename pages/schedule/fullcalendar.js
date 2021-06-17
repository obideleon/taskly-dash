import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState } from "react";

const fullcalendar = () => {
  const [events, setEvents] = useState([
    { title: "nice event", start: new Date() },
    { title: "nice event", start: new Date() },
  ]);
  return (
    <FullCalendar
      plugins={[interactionPlugin, timeGridPlugin]}
      initialView="timeGridWeek"
      nowIndicator={true}
      editable={true}
      initialEvents={events}
    />
  );
};

export default fullcalendar;
