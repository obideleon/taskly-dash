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

const TabNav = () => {
  return (
    <div className="md:hidden fixed w-full bg-white z-10 shadow">
      <nav className="flex justify-around">
        <button className="text-gray hover:text-blue-200 py-4 px-6 inline-block focus:outline-none font-medium border-white hover:border-blue-200 border-b-4">
          <Link href="/dashboard">
            <HomeIcon className="h-6 w-6 my-2 opacity-80" />
          </Link>
        </button>
        <button className="text-gray hover:text-blue-200 py-4 px-6 inline-block focus:outline-none border-white hover:border-blue-200 border-b-4">
          <Link href="/progress">
            <ChartPieIcon className="h-6 w-6 my-2 opacity-80" />
          </Link>
        </button>
        <button className="text-gray hover:text-blue-200 py-4 px-6 inline-block border-white hover:border-blue-200 border-b-4 focus:outline-none">
          <Link href="/schedule">
            <FolderIcon className="h-6 w-6 my-2 opacity-80" />
          </Link>
        </button>
        <button className="text-gray hover:text-blue-200 py-4 px-6 inline-block border-white hover:border-blue-200 border-b-4 focus:outline-none">
          <CogIcon className="h-6 w-6 my-2 opacity-80" />
        </button>
        <button className="text-gray hover:text-blue-200 py-4 px-6 inline-block border-white hover:border-blue-200 border-b-4 focus:outline-none">
          <Link href="/">
            <LogoutIcon className="h-6 w-6 my-2 opacity-80" />
          </Link>
        </button>
      </nav>
    </div>
  );
};

export default TabNav;
