import MeetingCard from "../components/MeetingCard";
import ScheduleCard from "../components/ScheduleCard";
import Heading from "../components/Heading";
import Header from "../components/Header";
import DailySchedTime from "../components/DailySchedTime";
import TaskCard from "../components/TaskCard";
import TeamCard from "../components/TeamCard";

const Main = () => {
  return (
    <div className="main h-[calc(100vw - 5rem)] ml-0 sm:ml-5 flex flex-row">
      <div className="mid-section w-screen 2xl:w-9/12">
        <Header />
        {/* Meeting list */}
        <div className="meeting-list__wrapper pr-4 lg:pr-10">
          <Heading name="Meeting List" />
          <div class="meeting__participants-container overflow-hidden flex flex-row -mt-10 ml-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ml-24">
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

        <div className="sched__container flex flex-row mt-20 grid grid-cols-1 lg:grid-cols-2 md:mt-24 2xl:space-x-10 lg:pr-10">
          {/* Daily Sched */}

          <div className="daily-sched__wrapper pr-5">
            <Heading name="Daily Sched" />
            <div className="daily-sched-with-time__container flex flex-row mt-10">
              <DailySchedTime />
              <div className="daily-sched-cards__container">
                <ScheduleCard
                  name="Team Meeting"
                  time="08:00 AM - 09:00 AM"
                  bgColor="bg-blue-200"
                  borderColor="text-blue-200"
                />
                <ScheduleCard
                  name="Usability Testing"
                  time="09:30 AM -10:30 AM"
                  bgColor="bg-orange"
                  borderColor="text-orange"
                />
                <ScheduleCard
                  name="Office Meeting"
                  time="11:20 AM -12:20 AM"
                  bgColor="bg-purple"
                  borderColor="text-purple"
                />
                <ScheduleCard
                  name="Client Briefing"
                  time="12:00 AM - 14:00 AM"
                  bgColor="bg-green"
                  borderColor="text-green"
                />
              </div>
            </div>
          </div>

          {/* Task History */}
          <div className="task-history__wrapper pr-5">
            <Heading name="Task History" />
            <div className="task-history__cards grid grid-cols-1 md:grid-cols-2 flex flex-row mt-10 ml-32">
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
          </div>
        </div>
      </div>
      <div className="aside-section lg:w-3/12 shadow p-10 hidden lg:block">
        <div className="aside__profile-card mt-96 pt-56">
          <TeamCard
            name="Aseif Rahman"
            position="Creative Director"
            pic="./img/dp1.jpg"
          />
          <TeamCard
            name="Lexy Sanz"
            position="UX Designer"
            pic="./img/dp2.jpg"
          />
          <TeamCard
            name="Kraul Brown"
            position="UI Designer"
            pic="./img/dp3.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
