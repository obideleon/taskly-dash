import {
  HomeIcon,
  ChartPieIcon,
  FolderIcon,
  ArchiveIcon,
  TrashIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

const Nav = ({ activeNav }) => {
  console.log(activeNav);
  return (
    <div
      id="sidebar"
      className="h-screen w-20 menu bg-white text-white fixed shadow hidden md:flex"
    >
      <ul className="list-reset w-full relative">
        <li className="my-8 full-w cursor-pointer">
          <Link href="/dashboard">
            <img
              src="./img/taskly-logo.png"
              alt="logo"
              className="w-9 h-9 block mx-auto"
            />
          </Link>
        </li>
        <li
          className={`my-2 md:my-0 text-gray  hover:border-blue-200 border-l-4 flex justify-center cursor-pointer ${
            activeNav === "main" ? "border-blue-200" : "border-white"
          }`}
        >
          <Link href="/dashboard">
            <a className="py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline flex space-x-11">
              <HomeIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </Link>
        </li>
        <li
          className={`my-2 md:my-0 text-gray  hover:border-blue-200 border-l-4 flex justify-center cursor-pointer ${
            activeNav === "progress" ? "border-blue-200" : "border-white"
          }`}
        >
          <Link href="/progress">
            <a
              href="#"
              className="py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline flex space-x-11"
            >
              <ChartPieIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </Link>
        </li>
        <li
          className={`my-2 md:my-0 text-gray hover:border-blue-200 border-l-4 flex justify-center cursor-pointer ${
            activeNav === "schedule" ? "border-blue-200" : "border-white"
          }`}
        >
          <Link href="/schedule">
            <a
              href="#"
              className="py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11"
            >
              <ArchiveIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </Link>
        </li>
        <li className="my-2 md:my-0 text-gray border-white hover:border-blue-200 border-l-4 flex justify-center cursor-pointer">
          <Link href="#">
            <a className="py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11">
              <FolderIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </Link>
        </li>

        <li className="my-2 md:my-0 text-gray border-white hover:border-blue-200 border-l-4 flex justify-center cursor-pointer">
          <Link href="#">
            <a
              href="#"
              className="py-1 md:py-3 pl-1 align-middle no-underline flex space-x-10"
            >
              <TrashIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </Link>
        </li>
        <li className="my-2 md:my-0 text-gray border-white hover:border-blue-200 border-l-4 flex justify-center cursor-pointer">
          <Link href="#">
            <a
              href="#"
              className="py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11"
            >
              <CogIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </Link>
        </li>
        <li className="my-2 md:my-0  text-gray border-white hover:border-blue-200 border-l-4 flex justify-center cursor-pointer">
          <Link href="/">
            <a
              href="#"
              className="py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11"
            >
              <LogoutIcon className="h-6 w-6 my-2 opacity-80" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
