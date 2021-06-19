import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";

const Dropdown = () => {
  return (
    <div className="bg-white flex flex-col justify-center z-10">
      <div className="flex items-center justify-center px-2">
        <div className=" relative inline-block text-left dropdown">
          <span className="rounded-md shadow-sm">
            <button
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray transition duration-150 ease-in-out bg-white shadow rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
              type="button"
              aria-haspopup="true"
              aria-expanded="true"
              aria-controls="headlessui-menu-items-117"
            >
              <ChevronDownIcon className="w-3.5 h-3.5 gray-200" />
            </button>
          </span>
          <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
            <div
              className="absolute right-0 w-56 mt-2 origin-top-right bg-white shadow divide-y rounded-md shadow-lg outline-none"
              aria-labelledby="headlessui-menu-button-1"
              id="headlessui-menu-items-117"
              role="menu"
            >
              <div className="px-4 py-3">
                <p className="text-sm leading-5">Signed in as</p>
                <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                  christinaparker@gmail.com
                </p>
              </div>
              <div className="py-1">
                <a
                  href="#"
                  tabindex="0"
                  className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-white-100"
                  role="menuitem"
                >
                  Profile
                </a>
                <a
                  href="#"
                  tabindex="1"
                  className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-white-100"
                  role="menuitem"
                >
                  Tasks
                </a>
                <a
                  href="#"
                  tabindex="2"
                  className="text-gray-400 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-white-100"
                  role="menuitem"
                >
                  Contact
                </a>
                <a
                  href="#"
                  tabindex="2"
                  className="text-gray-400 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-white-100"
                  role="menuitem"
                >
                  Switch Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
