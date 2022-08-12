import React from "react";
import { NavLink } from "react-router-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import LobbySection from "../../Components/Lobby/Lobby";
import MyBets from "../../Components/Mybets/MyBets";
import LiveEvents from "../../Components/LiveEvents/LiveEvents";
import StartingSoon from "../../Components/StartingSoon/StartingSoon";
import soccerBall from "./assets/soccerBall.png";
import { run } from "../Scripts/game";
import "./SectionBar.css";
const SectionNavBar = () => {
  let activeStyle = {
    background: "rgba(17, 19, 28, 0.8)",
    padding: "0.7rem",
  };
  let inActiveStyle = {
    background: "rgba(95, 95, 167, 0.37)",
    padding: "0.7rem",
  };
  return (
    <div>
      <div className="navbar_main_div">
        <div className="navbar_elements_main">
          <ul className="navbar_ul">
            <li className="navbar_list_elements">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={"/"}
                className="lobby_link"
              >
                LOBBY
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={"/MyBets"}
              >
                MY BETS
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={"/LiveEvents"}
              >
                LIVE EVENTS
              </NavLink>
            </li>
            {/* <li className="navbar_list_elements favourites_link">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={""}
              >
                FAVOURITES
              </NavLink>
            </li> */}
            <li className="navbar_list_elements">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={"/StartingSoon"}
                className="startSoon_link"
              >
                STARTING SOON
              </NavLink>
            </li>
          </ul>
          <div className="select_sports_btn" onClick={run}>
            <NavLink to={"/"}>
              <img src={soccerBall} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<LobbySection />}></Route>
        <Route path="/MyBets" element={<MyBets />}></Route>
        <Route path="/LiveEvents" element={<LiveEvents />}></Route>
        <Route path="/StartingSoon" element={<StartingSoon />}></Route>
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
};

export default SectionNavBar;
