import { ClockIcon } from "@heroicons/react/solid";
import { UserGroupIcon } from "@heroicons/react/solid";

const TaskCard = (props) => {
  return (
    <div
      className={`schedule__task-time flex justify-center items-center w-40 h-28 rounded-xl ${props.bgCard}`}
    >
      <div
        className={`task-icon-container w-10 h-10 mr-3 rounded-xl ${props.bgBox}`}
      >
        {props.icon === "clock" ? (
          <ClockIcon className={`w-6 h-6 ml-2 mt-2 ${props.bgIcon}`} />
        ) : (
          <UserGroupIcon className={`w-6 h-6 ml-2 mt-2 ${props.bgIcon}`} />
        )}
      </div>
      <div className="task-specs-container flex flex-col">
        <h2 className={`task-specs-title font-bold text-xl ${props.textColor}`}>
          {props.time}
        </h2>
        <p className="task-specs-description text-gray text-base">
          {props.label}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
