import { ChevronDownIcon } from "@heroicons/react/outline";
import { Bar } from "react-chartjs-2";
import React from "react";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  animation: {
    duration: 10,
  },
  scales: {
    xAxes: {
      stacked: true,
    },
    yAxes: {
      stacked: false,
      ticks: {
        callback: function (label, index, labels) {
          return label + " HR";
        },
        stepSize: 10,
      },
    },
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Practice",
      barThickness: 40,
      data: [40, 20, 30, 20, 10, 30, 20, 30, 10, 30, 20, 40],
      backgroundColor: "#2C71FF",
    },
    {
      label: "Theory",
      barThickness: 40,
      data: [50, 40, 40, 50, 30, 50, 30, 40, 30, 40, 30, 50],
      backgroundColor: "#E5F6FF",
    },
  ],
};

const BarChart = () => (
  <div className="w-full mt-2 p-6">
    <div className="flex items-center">
      <div className="w-3/12 sm:w-7/12 lg:w-8/12">
        <h2 className="sm:text-xl text-sm font-medium text-gray">
          Your Activity Progress
        </h2>
      </div>
      <div className="flex w-9/12 sm:w-5/12 lg:w-4/12 justify-evenly sm:justify-between">
        <div className="flex">
          <div className="flex items-center mr-6">
            <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
            <p className="sm:text-sm text-xs ml-2">Theory</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue rounded-full"></div>
            <p className="sm:text-sm text-xs ml-2">Practice</p>
          </div>
        </div>
        <div className="relative inline-flex cursor-pointer">
          <ChevronDownIcon className="w-4 h-4 text-gray-50 absolute top-0 right-0 m-2" />
          <select className="border border-gray-50 rounded-lg text-gray-50 pl-4 pr-8 py-2 appearance-none text-sm focus:outline-none">
            <option value="2021">2021</option>
            <option value="2021">2020</option>
            <option value="2021">2019</option>
          </select>
        </div>
      </div>
    </div>
    <div className="mt-6">
      <Bar data={data} options={options} height={225} width={800} />
    </div>
  </div>
);

export default BarChart;
