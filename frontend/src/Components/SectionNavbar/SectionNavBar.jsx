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
  return (
    <div>
      <div className="navbar_main_div">
        <div className="navbar_elements_main">
          <ul className="navbar_ul">
            <li className="navbar_list_elements">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-style" : "none"
                }
                to={"/"}
              >
                LOBBY
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-style" : "none"
                }
                to={"/MyBets"}
              >
                MY BETS
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-style" : "none"
                }
                to={"/LiveEvents"}
              >
                LIVE EVENTS
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-style" : "none"
                }
                to={""}
              >
                FAVOURITES
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-style" : "none"
                }
                to={"/StartingSoon"}
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
