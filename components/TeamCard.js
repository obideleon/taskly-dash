import { PhoneIcon } from "@heroicons/react/solid";
import { VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";

const TeamCard = (props) => {
  return (
    <div
      className={`meeting-team__profile-container flex flex-row mb-4 ${props.display}`}
    >
      <div className="meeting-team__profile-info-container flex flex-row">
        <img
          src={props.pic}
          alt="image"
          className="meeting-team__profile-pic w-12 h-12 rounded-full mr-4"
        />
        <div className="meeting-team__profile-name-container flex flex-col mt-1">
          <h3 className="meeting-team__profile-name text-gray text-lg font-medium">
            {props.name}
          </h3>
          <p className="meeting-team__profile-description text-gray-50 text-sm mt-1">
            {props.position}
          </p>
        </div>
      </div>

      <div className="meeting-team__profile-icon-container flex flex-row">
        <div className="phone__btn w-12 h-12 rounded-xl mr-3 hover:bg-white-100 hover:text-white">
          <PhoneIcon className="w-5 h-5 text-gray-50 m-3.5" />
        </div>
        <div className="cam__btn w-12 h-12 rounded-xl justify-center items-center hover:bg-white-100 hover:text-white">
          <VideoCameraIcon className="w-5 h-5 text-gray-50 m-3.5" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
