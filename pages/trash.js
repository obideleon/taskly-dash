import Link from "next/link";
import Nav from "../components/Nav";
import TabNav from "../components/TabNav";
import Header from "../components/Header";
import AsideHeading from "../components/AsideHeading";
import React from "react";

const trash = () => {
  return (
    <>
      <TabNav />
      <Nav />
      <div className="flex pr-10">
        <div className="mid-section__container grid grid-cols-1 w-full md:pl-10 xl:w-8/12 ">
          <div className="header__container">
            <Header />
          </div>
        </div>

        <aside className="aside-section w-4/12 p-10 hidden lg:block">
          <div className="aside-section__container flex flex-col">
            <div className="aside-section-header__container xl:ml-16 2xl:ml-24">
              <AsideHeading />
            </div>
          </div>
        </aside>
      </div>
      <div className="flex flex-col items-center h-screen w-full">
        <img src="./img/trash-bin.png" alt="img" className="trash-img" />
        <h1 className="trash-title text-gray-100 font-serif text-3xl -mt-20">
          Your Trash is Empty.
        </h1>
      </div>
    </>
  );
};

export default trash;
