import Link from "next/link";
import Nav from "../components/Nav";
import TabNav from "../components/TabNav";
import ScheduleTaskCards from "../components/ScheduleTaskCards";
import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";

const settings = () => {
  return (
    <>
      <TabNav />
      <Nav />
      <div className="settings-page__container pt-28 px-5 md:flex md:flex-col md:justify-center md:px-0 md:pt-16">
        <h2 className="settings__title text-gray font-serif text-2xl mb-5 md:pl-24 md:text-3xl">
          Settings
        </h2>
        <div className="settings-options__container flex flex-col">
          <div className="settings__container md:ml-20 w-full">
            <ScheduleTaskCards name="Account Settings" />
          </div>
          <div className="settings__container md:ml-20 w-full">
            <ScheduleTaskCards name="Privacy Settings" />
          </div>
          <div className="settings__container md:ml-20 w-full">
            <ScheduleTaskCards name="Theme" />
          </div>
        </div>
      </div>
    </>
  );
};

export default settings;
