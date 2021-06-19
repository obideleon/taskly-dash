import Header from "../components/Header";
import AsideHeading from "../components/AsideHeading";
import StatisticCard from "../components/StatisticCard";
import Progress from "../components/Progress";
import BarChart from "../components/BarChart";
import Rank from "../components/Rank";
import Nav from "../components/Nav";
import TabNav from "../components/TabNav";
import React from "react";

const index = () => {
  return (
    <>
      <TabNav activeNav={"progress"} />
      <Nav activeNav={"progress"} />
      <div className="main h-screen flex divide-x divide-white-100 sm:px-7 sm:ml-5">
        <div className="mid-section w-screen 2xl:w-9/12">
          <div className="mid-section__container grid grid-cols-1">
            <div className="header__container">
              <Header />
            </div>
            <div className="top-info__container md:ml-16 grid grid-cols-1">
              <BarChart />
            </div>
            <div className="bottom-info__container md:ml-16 grid grid-cols-1">
              <Rank />
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
                <StatisticCard />
              </div>
            </div>
            <div className="aside-bottom-info__container">
              <Progress />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default index;
