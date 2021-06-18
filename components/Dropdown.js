import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";

const Dropdown = () => {
  return (
    <div class="bg-white flex flex-col justify-center">
      <div class="flex items-center justify-center px-2">
        <div class=" relative inline-block text-left dropdown">
          <span class="rounded-md shadow-sm">
            <button
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray transition duration-150 ease-in-out bg-white shadow rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
              type="button"
              aria-haspopup="true"
              aria-expanded="true"
              aria-controls="headlessui-menu-items-117"
            >
              <ChevronDownIcon className="w-3.5 h-3.5 gray-200" />
            </button>
          </span>
          <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
            <div
              class="absolute right-0 w-56 mt-2 origin-top-right bg-white shadow divide-y rounded-md shadow-lg outline-none"
              aria-labelledby="headlessui-menu-button-1"
              id="headlessui-menu-items-117"
              role="menu"
            >
              <div class="px-4 py-3">
                <p class="text-sm leading-5">Signed in as</p>
                <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                  emiliasencio@gmail.com
                </p>
              </div>
              <div class="py-1">
                <a
                  href="javascript:void(0)"
                  tabindex="0"
                  class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                  role="menuitem"
                >
                  Profile
                </a>
                <a
                  href="javascript:void(0)"
                  tabindex="1"
                  class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                  role="menuitem"
                >
                  Tasks
                </a>
                <a
                  href="javascript:void(0)"
                  tabindex="2"
                  class="text-gray-400 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                  role="menuitem"
                >
                  Contact
                </a>
                <a
                  href="javascript:void(0)"
                  tabindex="2"
                  class="text-gray-400 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
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
