import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState } from "react";

const ScheduleCalendar = () => {
  const [events, setEvents] = useState([
    { title: "nice event", start: new Date() },
    { title: "nice event", start: new Date() },
  ]);
  return (
    <div className="calendar__container w-full px-5 py-5 md:pl-0 lg:pr-20">
      <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin]}
        initialView="dayGridMonth"
        nowIndicator={true}
        editable={true}
        initialEvents={events}
        height="auto"
      />
    </div>
  );
};

export default ScheduleCalendar;
