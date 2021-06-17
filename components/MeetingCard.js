import { StarIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
// import React, { useState } from "react";

const MeetingCard = (props) => {
  //   const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="meeting__group-container shadow gap-3 mb-4 2xl:-mb-0"
      // onMouseEnter={() => setIsShown(true)}
      // onMouseLeave={() => setIsShown(false)}
    >
      <div className="meeting__group-info flex flex-row">
        <div className={`meeting-group-icon ${props.bgColor}`}>
          <StarIcon className="text-white-100 w-6 h-6" />
        </div>

        <div className="meeting__name-container">
          <h3 className="meeting__name text-gray font-medium text-base">
            {props.name}
          </h3>
          <p className="meeting__description text-gray-50 text-sm mt-2">
            {props.description}
          </p>
        </div>
      </div>

      <div className="meeting__group-sched flex flex-row min-h-80px relative">
        <div className="meeting__group-time text-gray-50 text-xs mt-6 ml-14 flex xl:ml-28 2xl:ml-14">
          <ClockIcon className="w-4 h-4 mr-1 mb-1" />
          {props.time}
        </div>

        {/* {isShown && ( */}
        <div className="meeting__group-btn hidden absolute left-1/2 transform -translate-x-1/2">
          <div className="btn flex">
            <button class="decline-btn py-2 px-3 border border-bg-orange text-orange rounded-xl mr-1 hover:bg-orange hover:text-white">
              Decline
            </button>
            <button class="accept-btn py-2 px-3 border border-bg-blue text-blue rounded-xl hover:bg-blue-200 hover:text-white">
              Accept
            </button>
          </div>
        </div>
        {/* )} */}
        {/* <div class="meeting__group-members">
          <img class="member-pics" src="img/member-pics.png" />
        </div> */}
      </div>
    </div>
  );
};

export default MeetingCard;
