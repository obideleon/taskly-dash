import Nav from "../components/Nav";
import TabNav from "../components/TabNav";
import Header from "../components/Header";
import Heading from "../components/Heading";
import MeetingCard from "../components/MeetingCard";
import ScheduleCard from "../components/ScheduleCard";
import DailySchedTime from "../components/DailySchedTime";
import TaskCard from "../components/TaskCard";
import TaskChart from "../components/TaskChart";
import TeamCard from "../components/TeamCard";
import AsideHeading from "../components/AsideHeading";
import AsideCalendar from "../components/AsideCalendar";
import TeamHeading from "../components/TeamHeading";
import TeamBlueCard from "../components/TeamBlueCard";

import React from "react";

const dashboard = () => {
  const meetingTeam = [
    {
      name: "Aaseif Rahman",
      position: "Creative Director",
      pic: "img/user-1.png",
      display: "block",
    },
    {
      name: "Lexy Sanz",
      position: "UX Designer",
      pic: "img/user-2.png",
      display: "block",
    },
    {
      name: "Krawl Brown",
      position: "UI Designer",
      pic: "img/user-3.png",
      display: "block",
    },
    {
      name: "Brian Erjas",
      position: "Frontend Developer",
      pic: "img/user-4.png",
      display: "2xl:hidden",
    },
    {
      name: "Mary Estudillo",
      position: "UI/UX Designer",
      pic: "img/user-5.png",
      display: "2xl:hidden",
    },
    {
      name: "Vince Labastida",
      position: "Backend Developer",
      pic: "img/dp3.jpg",
      display: "2xl:hidden",
    },
    {
      name: "Angelo Soliven",
      position: "Backend Developer",
      pic: "img/dp2.jpg",
      display: "2xl:hidden",
    },
    {
      name: "KJ Caluscusao",
      position: "Backend Developer",
      pic: "img/dp1.jpg",
      display: "2xl:hidden",
    },
    {
      name: "Cris Awon",
      position: "Frontend Developer",
      pic: "img/user-1.png",
      display: "2xl:hidden",
    },
    {
      name: "John Tamargo",
      position: "Frontend Developer",
      pic: "img/user-2.png",
      display: "2xl:hidden",
    },
    {
      name: "Josuer Bague",
      position: "Backend Developer",
      pic: "img/user-3.png",
      display: "2xl:hidden",
    },
    {
      name: "Robby de Leon",
      position: "Backend Developer",
      pic: "img/user-4.png",
      display: "2xl:hidden",
    },
    {
      name: "James Villeza",
      position: "Frontend Developer",
      pic: "img/dp1.jpg",
      display: "2xl:hidden",
    },
  ];

  const scheduleCard = [
    {
      name: "Team Meeting",
      time: "08:00 AM - 09:00 AM",
      bgColor: "bg-blue-200",
      borderColor: "text-blue-200",
      extra: "md:ml-72",
    },
    {
      name: "Usability Testing",
      time: "09:30 AM -10:30 AM",
      bgColor: "bg-orange",
      borderColor: "text-orange",
      extra: "md:ml-10",
    },
    {
      name: "Office Meeting",
      time: "11:20 AM -12:20 AM",
      bgColor: "bg-purple",
      borderColor: "text-purple",
      extra: "md:ml-72",
    },
    {
      name: "Client Briefing",
      time: "12:00 AM - 14:00 AM",
      bgColor: "bg-green",
      borderColor: "text-green",
      extra: "md:ml-10",
    },
  ];

  const meetingCard = [
    {
      name: "Team UI/UX",
      description: "Weekly team meeting",
      time: "10:00 - 11:00 AM",
      bgColor: "bg-blue-200",
    },
    {
      name: "Usability Testing",
      description: "with Mr. Ferdinand",
      time: "10:00 - 11:00 AM",
      bgColor: "bg-orange",
    },
    {
      name: "Offline Meeting",
      description: "Client from USA",
      time: "11:20 - 12:20 AM",
      bgColor: "bg-purple",
    },
    {
      name: "Client Briefing",
      description: "Weekly team meeting",
      time: "12:00 - 14:00 AM",
      bgColor: "bg-blue-200",
    },
  ];

  const taskCard = [
    {
      time: "20hr",
      label: "Time",
      bgCard: "bg-blue-50",
      bgBox: "bg-blue-100",
      bgIcon: "text-blue",
      textColor: "text-blue",
      icon: "clock",
    },
    {
      time: "12",
      label: "Meeting",
      bgCard: "bg-orange-50",
      bgBox: "bg-orange-100",
      bgIcon: "text-orange",
      textColor: "text-orange",
    },
  ];

  return (
    <>
      <TabNav activeNav={"main"} />
      <Nav activeNav={"main"} />
      <div className="main h-screen flex divide-x divide-white-100 px-7 ml-0 sm:ml-5">
        <div className="mid-section w-screen 2xl:w-9/12">
          <div className="mid-section__container grid grid-cols-1">
            <div className="header__container">
              <Header />
            </div>
            <div className="top-info__container md:ml-16 grid grid-cols-1">
              <div className="meeting-list__wrapper w-full my-5 pl-5 pr-4 lg:pr-10">
                <Heading name="Meeting List" />
                <div class="meeting__participants-container mt-3 gap-x-3 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
                  {meetingCard.map((x) => {
                    return (
                      <MeetingCard
                        name={x.name}
                        description={x.description}
                        time={x.time}
                        bgColor={x.bgColor}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bottom-info__container md:ml-16 grid grid-cols-1">
              <div className="sched__container pl-5 grid w-full grid-cols-1 2xl:grid-cols-2 md:mt-5 lg:pr-10 2xl:space-x-10">
                {/* Daily Sched */}

                <div className="daily-sched__wrapper pr-5">
                  <Heading name="Daily Schedule" />
                  <div className="daily-sched-with-time__container flex flex-row mt-5">
                    <DailySchedTime />
                    <div className="daily-sched-cards__container w-80">
                      {scheduleCard.map((x) => {
                        return (
                          <ScheduleCard
                            name={x.name}
                            time={x.time}
                            bgColor={x.bgColor}
                            borderColor={x.borderColor}
                            extra={x.extra}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Task History */}
                <div className="task-history__wrapper">
                  <Heading name="Task History" />
                  <div className="task-history__cards mt-5 gap-2 grid grid-cols-1 md:grid-cols-2">
                    {taskCard.map((x) => {
                      return (
                        <TaskCard
                          time={x.time}
                          label={x.label}
                          bgCard={x.bgCard}
                          bgBox={x.bgBox}
                          bgIcon={x.bgIcon}
                          textColor={x.textColor}
                          icon={x.icon}
                        />
                      );
                    })}
                  </div>
                  <TaskChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="aside-section w-4/12 p-10 hidden lg:block">
          <div className="aside-section__container flex flex-col">
            <div className="aside-section-header__container">
              <AsideHeading />
            </div>
            <div className="aside-top-info__container">
              <div>
                <AsideCalendar />
              </div>
            </div>
            <div className="aside-bottom-info__container">
              <TeamHeading />
              <div className="aside__profile-card">
                {meetingTeam.map((x) => {
                  return (
                    <TeamCard
                      name={x.name}
                      position={x.position}
                      pic={x.pic}
                      display={x.display}
                    />
                  );
                })}
              </div>
              <TeamBlueCard />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default dashboard;
