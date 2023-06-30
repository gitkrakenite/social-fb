import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import { AppContext } from "../context/appContext";

const Sidebar = () => {
  return (
    <div className="sidebar overflow-y-scroll prompt ">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
