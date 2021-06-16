import { ChevronDownIcon } from "@heroicons/react/solid";

const Heading = (props) => {
  return (
    <div
      className={`meeting__title-container flex flex-row items-center ml-24`}
    >
      <h2 className="meeting__title text-gray font-bold">{props.name}</h2>
      <div className="this-week-dropdown flex flex-row text-gray">
        <p className="meeting__schedule text-gray-100 flex flex-row font-normal hidden md:block">
          This Week
        </p>
        <ChevronDownIcon className="w-5 h-5 ml-1 mt-0.5" />
      </div>
    </div>
  );
};

export default Heading;