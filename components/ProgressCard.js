import React from "react";

const ProgressCard = ({ width, bgColor, taskName }) => {
  return (
    <div className="flex w-full mt-8">
      <div>
        <div
          className={`${bgColor} w-9 h-9 border-${bgColor} rounded-full mr-4 flex justify-center items-center`}
        >
          <p className="text-base font-medium text-white">{taskName[0]}</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between font-medium">
          <p className="font-normal sm:text-sm text-xs">{taskName}</p>
          <p className="text-xs text-blue-200">{width}%</p>
        </div>
        <div className="relative pt-1 mt-2">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-50">
            <div
              style={{ width: `${width}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-blue"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
