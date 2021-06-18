import Main from "../components/Main";
import Nav from "../components/Nav";
import TabNav from "../components/TabNav";
import React from "react";

const dashboard = () => {
  return (
    <div>
      <TabNav />
      <Nav />
      <Main />
    </div>
  );
};

export default dashboard;
