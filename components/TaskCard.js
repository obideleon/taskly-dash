import { ClockIcon } from "@heroicons/react/solid";
import { UserGroupIcon } from "@heroicons/react/solid";

const TaskCard = (props) => {
  return (
    <div
      className={`schedule__task-time flex flex-row justify-center items-center w-44 h-24 rounded-xl mr-6 ${props.bgCard}`}
    >
      <div
        className={`task-icon-container w-10 h-10 rounded-xl -ml-4 mr-6 ${props.bgBox}`}
      >
        <ClockIcon className={`w-6 h-6 ml-2 mt-2 ${props.bgIcon}`} />
      </div>
      <div className="task-specs-container flex flex-col">
        <h2 className={`task-specs-title font-bold ${props.textColor}`}>{props.time}</h2>
        <p className="task-specs-description text-gray">{props.label}</p>
      </div>
    </div>
  );
};

export default TaskCard;
