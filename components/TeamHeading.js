import { BellIcon } from "@heroicons/react/outline";
import React from "react";


const TeamHeading = () => {
  return (
    <div className="team-heading__container flex mb-8 mt-8 space-x-32 2xl:space-x-72">
      <h2 className="team-heading text-gray text-xl font-medium">
        Meeting Team
      </h2>
      <a
        className="see-all-btn text-blue-200 text-sm hover:underline xl:hidden 2xl:block"
        href="#"
      >
        See All
      </a>
    </div>
  );
};

export default TeamHeading;
