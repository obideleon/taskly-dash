import MeetingCard from "../components/MeetingCard";
import ScheduleCard from "../components/ScheduleCard";
import Heading from "../components/Heading";
import Header from "../components/Header";
import DailySchedTime from "../components/DailySchedTime";
import TaskCard from "../components/TaskCard";
import TeamCard from "../components/TeamCard";
import AsideHeading from "../components/AsideHeading";
import TeamHeading from "../components/TeamHeading";
import TeamBlueCard from "../components/TeamBlueCard";
import TaskChart from "../components/TaskChart";
import AsideCalendar from "../components/AsideCalendar";

const Main = () => {
  return (
    <div className="main h-screen flex divide-x divide-white-100 px-7 ml-0 sm:ml-5">
      <div className="mid-section w-screen 2xl:w-9/12">
        <div className="mid-section__container grid grid-cols-1">
          <div className="header__container">
            <Header />
          </div>
          <div className="top-info__container md:ml-16 grid grid-cols-1">
            <div className="meeting-list__wrapper w-full pr-4 lg:pr-10">
              <Heading name="Meeting List" />
              <div class="meeting__participants-container mt-3 gap-x-1 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
                <MeetingCard
                  name="Team UI/UX"
                  description="Weekly team meeting"
                  time="10:00 - 11:00 AM"
                  bgColor="bg-blue-200"
                />
                <MeetingCard
                  name="Usability Testing"
                  description="with Mr. Ferdinand"
                  time="10:00 - 11:00 AM"
                  bgColor="bg-orange"
                />
                <MeetingCard
                  name="Offline Meeting"
                  description="Client from USA"
                  time="11:20 - 12:20 AM"
                  bgColor="bg-purple"
                />
                <MeetingCard
                  name="Team UI/UX"
                  description="Weekly team meeting"
                  time="10:00 - 11:00 AM"
                  bgColor="bg-blue-200"
                />
              </div>
            </div>
          </div>
          <div className="bottom-info__container md:ml-16 grid grid-cols-1">
            <div className="sched__container grid w-full grid-cols-1 2xl:grid-cols-2 md:mt-5 lg:pr-10 2xl:space-x-10">
              {/* Daily Sched */}

              <div className="daily-sched__wrapper pr-5">
                <Heading name="Daily Sched" />
                <div className="daily-sched-with-time__container flex flex-row mt-10">
                  <DailySchedTime />
                  <div className="daily-sched-cards__container w-80">
                    <ScheduleCard
                      name="Team Meeting"
                      time="08:00 AM - 09:00 AM"
                      bgColor="bg-blue-200"
                      borderColor="text-blue-200"
                      extra="xl:ml-72"
                    />
                    <ScheduleCard
                      name="Usability Testing"
                      time="09:30 AM -10:30 AM"
                      bgColor="bg-orange"
                      borderColor="text-orange"
                      extra="xl:ml-10"
                    />
                    <ScheduleCard
                      name="Office Meeting"
                      time="11:20 AM -12:20 AM"
                      bgColor="bg-purple"
                      borderColor="text-purple"
                      extra="xl:ml-72"
                    />
                    <ScheduleCard
                      name="Client Briefing"
                      time="12:00 AM - 14:00 AM"
                      bgColor="bg-green"
                      borderColor="text-green"
                      extra="xl:ml-10"
                    />
                  </div>
                </div>
              </div>

              {/* Task History */}
              <div className="task-history__wrapper">
                <Heading name="Task History" />
                <div className="task-history__cards mt-10 grid grid-cols-1 md:grid-cols-2">
                  <TaskCard
                    time="20hr"
                    label="Time"
                    bgCard="bg-blue-50"
                    bgBox="bg-blue-100"
                    bgIcon="text-blue"
                    textColor="text-blue"
                    icon="clock"
                  />
                  <TaskCard
                    time="250"
                    label="Meeting"
                    bgCard="bg-orange-50"
                    bgBox="bg-orange-100"
                    bgIcon="text-orange"
                    textColor="text-orange"
                  />
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
            <AsideCalendar />
          </div>
          <div className="aside-bottom-info__container">
            <TeamHeading />
            <div className="aside__profile-card">
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="block"
              />
              <TeamCard
                name="Lexy Sanz"
                position="UX Designer"
                pic="./img/dp2.jpg"
                display="block"
              />
              <TeamCard
                name="Kraul Brown"
                position="UI Designer"
                pic="./img/dp3.jpg"
                display="block"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
              <TeamCard
                name="Aseif Rahman"
                position="Creative Director"
                pic="./img/dp1.jpg"
                display="2xl:hidden"
              />
            </div>
            <TeamBlueCard />
          </div>
        </div>
      </aside>
    </div>

    //LAYOUT
    // <div className="main h-[calc(100vw - 5rem)] flex px-7 ml-0 sm:ml-5">
    //   <div className="mid-section w-screen 2xl:w-8/12">
    //     <div className="mid-section__container grid grid-cols-1">
    //       <div className="header__container">
    //         <Header />
    //       </div>
    //       <div className="top-info__container ml-16 grid grid-cols-1"></div>
    //       <div className="bottom-info__container ml-16 grid grid-cols-1"></div>
    //     </div>
    //   </div>
    //   <aside className="aside-section lg:w-4/12 shadow p-10 hidden xl:block">
    //     <div className="aside-section__container flex flex-col">
    //       <div className="aside-section-header__container">
    //         <AsideHeading />
    //       </div>
    //       <div className="aside-top-info__container"></div>
    //       <div className="aside-bottom-info__container"></div>
    //     </div>
    //   </aside>
    // </div>
  );
};

export default Main;
