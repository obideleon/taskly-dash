import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

const Header = () => {
  return (
    <div className="header__container pl-5 flex flex-row mt-14 md:mt-0 md:pl-0 lg:pr-20">
      <div className="greeting__container flex flex-col ml-0 mt-10 md:ml-10 md:px-6 mb-6">
        <h1 className="greeting__title text-gray font-bold text-2xl">
          Good Day, Christina P.
        </h1>
        <p className="greeting__description text-gray-50 text-sm mt-1">
          Welcome back, nice to see you again!
        </p>
      </div>
      <div className="shadow w-80 h-12 mt-10 -mr-12 hidden lg:block relative">
        <input
          className="rounded w-80 h-12 p-2 focus:outline-none"
          type="text"
          placeholder="Search..."
        />
        <button className="absolute right-2 top-2 w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
          <SearchIcon className="search-icon w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;
