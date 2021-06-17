import { BellIcon } from "@heroicons/react/outline";
const TeamHeading = () => {
  return (
    <div className="team-heading__container flex space-x-56 2xl:space-x-80 mb-8 mt-10">
      <h2 className="team-heading text-xl text-gray font-bold">Meeting Team</h2>
      <a className="see-all-btn text-blue-200 text-sm" href="#">
        See All
      </a>
    </div>
  );
};

export default TeamHeading;
