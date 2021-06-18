import { XIcon } from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";

const ScheduleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return !isOpen ? (
    <button onClick={(e) => setIsOpen(true)}>Open Modal</button>
  ) : (
    <div className="flex justify-center h-screen items-center bg-white-100 antialiased">
      <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-white-100 shadow-sm">
        <div className="flex flex-row justify-between p-6 bg-white border-b border-white-100 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold text-gray-100">Create New Task</p>
          <XIcon
            className="w-6 h-6 text-gray-100 cursor-pointer"
            onClick={(e) => setIsOpen(false)}
          />
        </div>
        <div className="px-6 py-5 bg-white">
          <div className="mb-5">
            <div className="w-full">
              <p className="mb-2 font-semibold text-gray-100">Task Name</p>
              <input
                type="text"
                name=""
                className="w-full p-3 bg-white border border-gray-100 rounded shadow-sm appearance-none text-gray-100"
                id=""
              />
            </div>
            <div className="w-full mt-4">
              <p className="mb-2 font-semibold text-gray-100">
                Pick a Schedule
              </p>
              <input
                type="date"
                name=""
                className="w-full p-3 bg-white border border-gray-100 rounded shadow-sm appearance-none"
                id=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-white-100 rounded-bl-lg rounded-br-lg">
          <button
            className="font-semibold text-gray-100 cursor-pointer"
            onClick={(e) => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className=" cursor-pointer px-4 py-2 bg-blue text-white font-semibold bg-blue-500 rounded"
            onClick={(e) => setIsOpen(false)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
