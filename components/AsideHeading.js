import { BellIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const AsideHeading = (props) => {
  return (
    <div className="aside-heading__container flex space-x-64 2xl:space-x-96 items-center fixed">
      <BellIcon className="w-6 h-6 text-gray-50" />

      <div className="aside-profile items-center flex">
        <img
          className="mr-2 w-12 h-12 rounded-full"
          src="./img/dp1.jpg"
          alt="image"
        />
        <ChevronDownIcon className="w-5 h-5 text-gray-50" />
      </div>
    </div>
  );
};

export default AsideHeading;
