import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";

const Heading = (props) => {
  return (
    <div
      className={`meeting__title-container flex flex-row items-center mt-5 2xl:mt-0`}
    >
      <h2 className="meeting__title text-gray text-xl font-medium">
        {props.name}
      </h2>
    </div>
  );
};

export default Heading;
