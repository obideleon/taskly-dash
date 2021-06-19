import Header from "../components/Header";
import AsideHeading from "../components/AsideHeading";
import Nav from "../components/Nav";
import ScheduleCalendar from "../components/ScheduleCalendar";
import TeamHeading from "../components/TeamHeading";
import ScheduleTaskCards from "../components/ScheduleTaskCards";
import React from "react";
import TabNav from "../components/TabNav";

const schedule = () => {
  return (
    <>
      <TabNav />
      <Nav />
      <div className="main h-screen bg-white flex divide-x divide-white-100 sm:px-7 sm:ml-5">
        <div className="mid-section w-screen 2xl:w-9/12">
          <div className="mid-section__container grid grid-cols-1">
            <div className="header__container">
              <Header />
            </div>
            <div className="top-info__container md:ml-16 grid grid-cols-1">
              <ScheduleCalendar />
            </div>
          </div>
        </div>
        <aside className="aside-section w-4/12 p-10 hidden lg:block">
          <div className="aside-section__container flex flex-col">
            <div className="aside-section-header__container">
              <AsideHeading />
            </div>
            <div className="aside-top-info__container flex">
              <div className="priority-tasks__container bg-white-100 w-full shadow rounded-xl mt-10 p-5 px-6">
                <ScheduleTaskCards
                  name="Product Presentation"
                  time="08:00-09:00"
                />
                <ScheduleTaskCards name="Mom's birthday" time="08:00-09:00" />
                <ScheduleTaskCards
                  name="Meeting with Client"
                  time="08:00-09:00"
                />
                <ScheduleTaskCards
                  name="Meeting with Investors"
                  time="08:00-09:00"
                />
                <ScheduleTaskCards name="Group dinner" time="08:00-09:00" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default schedule;
