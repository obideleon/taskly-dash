import { Doughnut } from "react-chartjs-2";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React from "react";

const options = {
  cutout: 70,
};

const data = {
  datasets: [
    {
      data: [55, 73],
      backgroundColor: ["#FF562D", "#2C71FF"],
    },
  ],
};

const StatisticCard = () => {
  return (
    <div className="w-full p-6 mt-10 mx-auto">
      <div className="flex justify-between mb-8">
        <p className="sm:text-xl text-sm font-medium text-gray">Statistic</p>
        <DotsHorizontalIcon className="h-6 w-6 cursor-pointer text-blue" />
      </div>
      <div className="text-center mx-auto max-w-full relative w-56">
        <Doughnut data={data} options={options} height={200} width={200} />

        <div className="chartInner">
          <p className=" text-3xl font-bold text-blue">128</p>
          <p className="sm:text-sm text-xs">Task Progress</p>
        </div>
      </div>
      <div className="flex mt-11 justify-evenly">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-blue rounded-full"></div>
          <p className="sm:text-sm text-xs ml-2">Done</p>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-orange rounded-full"></div>
          <p className="sm:text-sm text-xs ml-2">In Progress</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
