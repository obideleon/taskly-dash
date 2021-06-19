import Link from "next/link";
import Nav from "../components/Nav";
import TabNav from "../components/TabNav";
import React from "react";

const trash = () => {
  return (
    <>
      <TabNav />
      <Nav />
      <div className="flex justify-center items-center h-screen w-full">
        <h1 className="trash-title text-gray-100 font-serif text-3xl">
          Your Trash is Empty.
        </h1>
      </div>
    </>
  );
};

export default trash;
