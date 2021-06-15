import { StarIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/outline";

const MeetingCard = (props) => {
  return (
    <div className="meeting__group-container shadow">
      <div className="meeting__group-info flex flex-row">
        <div className={`meeting-group-icon ${props.bgColor}`}>
          <StarIcon className="text-white-100 w-6 h-6" />
        </div>

        <div className="meeting__name-container">
          <h3 className="meeting__name text-gray font-medium">{props.name}</h3>
          <p className="meeting__description text-gray-50 mt-2">
            {props.description}
          </p>
        </div>
      </div>

      <div className="meeting__group-sched flex flex-row">
        <div className="meeting__group-time text-gray-50 mt-6 mr-5 flex">
          <ClockIcon className="w-4 h-4 mr-1 mb-1" />
          {props.time}
        </div>
        {/* <div class="meeting__group-members">
          <img class="member-pics" src="img/member-pics.png" />
        </div> */}
      </div>
    </div>
  );
};

export default MeetingCard;
