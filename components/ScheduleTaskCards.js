import React from "react";

const ScheduleTaskCards = (props) => {
  return (
    <div
      className={`schedule-task-card__container px-5 py-6 rounded-xl shadow bg-white mb-3`}
    >
      <div className="h1 schedule-task-card__title mb-3 text-lg text-gray font-medium">
        {props.name}
      </div>
      <p className="schedule-task-card__time text-lg text-gray">{props.time}</p>
    </div>
  );
};

export default ScheduleTaskCards;
