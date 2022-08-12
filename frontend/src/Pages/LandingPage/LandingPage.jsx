import React, { useState } from "react";
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
  const [searchValue, setSearchValue] = useState("");

  const searchFunction = (e) => {
    const { name, value } = e.target;
    setSearchValue((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };
  return (
    <div className="Main_Page_Root_div">
      <div className="NavBar_root_div">
        <NavBar />
      </div>
      <div className="Crousal_root_div">
        <Crousal />
      </div>
      <div className="Search">
        <p className="SearchHeading">Trending Today Live Events for you ...</p>
        <div className="SearchBar">
          <img src="https://img.icons8.com/pastel-glyph/32/ffffff/search--v1.png" />
          <input
            type="text"
            name="search"
            defaultValue={searchValue}
            onChange={searchFunction}
            placeholder="Search Events"
          />
        </div>
      </div>
      <div className="SectionNavBar_root_div">
        <SectionsNavBar />
      </div>
    </div>
  );
};

export default LandingPage;
