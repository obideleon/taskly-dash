import MeetingCard from "../components/MeetingCard";
import ScheduleCard from "../components/ScheduleCard";
import Heading from "../components/Heading";
import Header from "../components/Header";
import DailySchedTime from "../components/DailySchedTime";
import TaskCard from "../components/TaskCard";
import TeamCard from "../components/TeamCard";

const Main = (props) => {
  return (
    <div className="main h-[calc(100vw - 80px)] ml-20 flex flex-row">
      <div className="mid-section w-8/12">
        <Header />
        {/* Meeting list */}
        <div className="meeting-list__wrapper">
          <Heading name="Meeting List" />
          <div class="meeting__participants-container flex flex-row -mt-10 ml-3">
            <MeetingCard
              name="Team UI/UX Meeting"
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

        <div className="sched__container flex flex-row mt-14">
          {/* Daily Sched */}

          <div className="daily-sched__wrapper w-1/2">
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
          <div className="task-history__wrapper w-1/2">
            <Heading name="Task History" />
            <div className="task-history__cards flex flex-row ml-24 mt-10">
            <TaskCard time="20hr" label="Time" bgCard="bg-blue-50" bgBox="bg-blue-100" bgIcon="text-blue" textColor="text-blue" />
            <TaskCard time="250" label="Meeting" bgCard="bg-orange-50" bgBox="bg-orange-100" bgIcon="text-orange" textColor="text-orange" />
            </div>
          </div>
        </div>
      </div>
      <div className="aside-section w-4/12 ml-32 shadow p-10">
          <div className="aside__profile-card mt-96">
          <TeamCard name="Aseif Rahman" position="Creative Director"/>
          <TeamCard name="Lexy Sanz" position="UX Designer"/>
          <TeamCard name="Kraul Brown" position="UI Designer"/>
      </div>
      </div>
    </div>
  );
};

export default Main;
