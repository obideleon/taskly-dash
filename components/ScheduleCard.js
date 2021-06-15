import { BriefcaseIcon } from "@heroicons/react/solid";

const ScheduleCard = (props) => {
  return (
    <div className={`schedule__group-box ${props.borderColor}`}>
      <div className={`sched-pic ${props.bgColor}`}>
        <BriefcaseIcon className="text-white-100 w-5 h-5" />
      </div>

      <div className="sched__name-container">
        <h3 className="sched__name text-gray font-medium">{props.name}</h3>
        <p
          className={`sched__description font-normal mr-5 ${props.borderColor}`}
        >
          {props.time}
        </p>
      </div>
    </div>
  );
};

export default ScheduleCard;
