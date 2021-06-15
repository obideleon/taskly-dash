import { PhoneIcon } from "@heroicons/react/solid";
import { VideoCameraIcon } from "@heroicons/react/solid";

const TeamCard = (props) => {
  return (
    <div className="meeting-team__profile-container flex flex-row mb-4">
            <div className="meeting-team__profile-info-container flex flex-row">
              
            <div className="meeting-team__profile-name-container flex flex-col mt-1">
              <h3 className="meeting-team__profile-name text-gray font-bold">{props.name}</h3>
              <p className="meeting-team__profile-description text-gray-50 mt-1">{props.position}</p>
            </div>
            </div>
  
            <div className="meeting-team__profile-icon-container flex flex-row">
            <div className="phone__btn w-12 h-12 rounded-xl bg-white-100 mr-3">
                <PhoneIcon className="w-5 h-5 text-gray-50 m-3.5" />
            </div>
            <div className="cam__btn w-12 h-12 rounded-xl bg-white-100 justify-center items-center">
                <VideoCameraIcon className="w-5 h-5 text-gray-50 m-3.5" />
            </div>
            </div>
            
          </div>
  );
};

export default TeamCard;