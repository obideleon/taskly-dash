import Calendar from "react-calendar";
import React, { useState } from "react";

const AsideCalendar = (props) => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="Sample shadow rounded-xl">
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar onChange={onChange} showWeekNumbers value={value} />
        </main>
      </div>
    </div>
  );
};

export default AsideCalendar;
