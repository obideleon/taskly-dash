import {
  HomeIcon,
  ChartPieIcon,
  FolderIcon,
  ArchiveIcon,
  TrashIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import React from "react";

const Nav = () => {
  return (
    <div
      id="sidebar"
      className="h-screen w-20 menu bg-white text-white flex items-center static fixed shadow hidden sm:flex"
    >
      <ul className="list-reset my-28 w-full space-y-64">
        <div className="top-menu">
          <img src="./img/taskly-logo.jpg" alt="logo" className="w-5 h-5" />
          <li className="my-2 md:my-0 text-gray border-white hover:border-blue-200 border-l-4 flex justify-center">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline flex space-x-11"
            >
              <HomeIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </li>
          <li className="my-2 md:my-0 text-gray border-white hover:border-blue-200 border-l-4 flex justify-center">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline flex space-x-11"
            >
              <ChartPieIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </li>
          <li className="my-2 md:my-0 text-gray border-white hover:border-blue-200 border-l-4 flex justify-center">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11"
            >
              <FolderIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </li>
          <li className="my-2 md:my-0 text-gray border-white hover:border-blue-200 border-l-4 flex justify-center">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11"
            >
              <ArchiveIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </li>
          <li className="my-2 md:my-0 text-gray border-white hover:border-blue-200 border-l-4 flex justify-center">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle no-underline flex space-x-10"
            >
              <TrashIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </li>
        </div>

        <div className="bottom-menu">
          <li className="my-2 md:my-0 text-gray border-white hover:border-blue-200 border-l-4 flex justify-center">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11"
            >
              <CogIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </li>
          <li className="my-2 md:my-0 text-gray border-white hover:border-blue-200 border-l-4 flex justify-center">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11"
            >
              <LogoutIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
