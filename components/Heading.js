import { ChevronDownIcon } from "@heroicons/react/solid";

const Heading = (props) => {
  return (
    <div className={`meeting__title-container flex flex-row items-center ml-24`}>
      <h2 className="meeting__title text-gray font-bold">{props.name}</h2>
      <p className="meeting__schedule text-gray-100 flex font-normal">
        This Week<ChevronDownIcon className="w-5 h-5 ml-1 mt-0.5"/>
      </p>
    </div>
  );
};

export default Heading;
