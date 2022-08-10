import React from "react";
import "./LandingPage.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SideBar from "../../Components/Sidebar/SideBar";
import NavBar from "../../Components/Navbar/NavBar";
import Crousal from "../../Components/Crousal/Crousal";
import SectionsNavBar from "../../Components/SectionNavbar/SectionNavBar";
import LobbySection from "../../Components/Lobby/Lobby";
import MyBets from "../../Components/Mybets/MyBets";
import LiveEvents from "../../Components/LiveEvents/LiveEvents";
import StartingSoon from "../../Components/StartingSoon/StartingSoon";
import { run } from "../../Components/Scripts/game";

const LandingPage = () => {
  return (
    <div className="Main_Page_Root_div">
      <div className="NavBar_root_div">
        <NavBar />
      </div>
      <div className="Crousal_root_div">
        <Crousal />
      </div>
      <div className="SectionNavBar_root_div">
        <SectionsNavBar />
      </div>
    </div>
  );
};

export default LandingPage;
