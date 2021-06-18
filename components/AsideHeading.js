import { BellIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";
import React from "react";

const AsideHeading = (props) => {
  return (
    <div className="aside-heading__container flex space-x-48 2xl:space-x-80 items-center">
      <BellIcon className="w-6 h-6 text-gray-50" />

      <div className="aside-profile items-center flex">
        <img
          className="mr-2 w-12 h-12 rounded-full 2xl:ml-9"
          src="./img/dp1.jpg"
          alt="image"
        />
        <Dropdown />
      </div>
    </div>
  );
};

export default AsideHeading;
