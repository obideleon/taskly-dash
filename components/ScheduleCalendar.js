import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState } from "react";

const ScheduleCalendar = () => {
  const [events, setEvents] = useState([
    { title: "Project Design Meeting", start: new Date() },
    { title: "Mom's birthday", start: new Date("6 / 2 / 21") },
    { title: "Meeting with Client", start: new Date("6 / 10 / 21") },
    { title: "Meeting with Investors", start: new Date("6 / 20 / 21") },
    { title: "Festival", start: new Date("6 / 25 / 21") },
    { title: "Group dinner", start: new Date("6 / 5 / 21") },
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
