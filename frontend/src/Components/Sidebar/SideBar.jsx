import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import menuIcon from "./assets/menu.png";
import userProfilePicture from "./assets/user_profile.jpg";
import dashboardIcon from "./assets/dashboard.png";
import myBetsIcon from "./assets/user_group.png";
import liveEvents from "./assets/live-events.png";
import calendarIcon from "./assets/calendar.png";
import sportListrIcon from "./assets/settings.png";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

const SideBar = () => {
  const [user, setUser] = useState({
    name: "User One",
    status: "new user",
    picture: userProfilePicture,
  });

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("offline");

  const toggle = () => setOpen(!open);

  const menuItems = [
    { path: "/", name: "Dashboard", icon: dashboardIcon },
    { path: "/MyBets", name: "My Bets", icon: myBetsIcon },
    { path: "/LiveEvents", name: "Live Events", icon: liveEvents },
    { path: "/StartingSoon", name: "Starting Soon", icon: calendarIcon },
    { path: "/", name: "Sports List", icon: sportListrIcon },
  ];

  return (
    <div className="container" style={{width:"0%"}}>
      <div style={{ width: open ? "270px" : "65px" }} className="SideBar">
        <img
          src={menuIcon}
          alt="#"
          style={{ marginLeft: open ? "180px" : "0px" }}
          className="burgerIcon"
          onClick={toggle}
        />
        <div
          className="alternate_profile_picture_small_sideBar"
          style={{ display: open ? "none" : "block" }}
        ></div>
        <div
          className="status_light"
          style={{
            display: open ? "none" : "block",
            background: status === "offline" ? "red" : "green",
          }}
        ></div>
        <div
          style={{ display: open ? "block" : "none" }}
          className="user_profile"
        >
          <img src={user.picture} alt="#" className="user_profile_picture" />
          <span className="user_name">{user.name}</span>
          <span className="user_status">{user.status}</span>
        </div>
        <div
          className="functions_of_sidebar"
          style={{ marginTop: open ? "0px" : "-40px" }}
        >
          {menuItems.map((item, index) => (
            <div className="side_bar_elments_list" key={index}>
              <NavLink to={item.path} className="NavLink_SideBar">
                <div
                  className="element"
                  style={{
                    display: open ? "flex" : "block",
                    justifyContent: open ? "center" : "normal",
                    marginTop: open ? "0px" : "10px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt="#"
                    style={{
                      marginLeft: open ? "8px" : "-22px",
                      height: open ? "20px" : "30px",
                      width: open ? "20px" : "30px",
                      transition: open ? "0.5s ease-in" : "none",
                      marginTop: open ? "0" : "-15px",
                    }}
                    className="icons_sideBar"
                  />
                  {open && <div className="item_name">{item.name}</div>}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="bottomBar">
        <NavLink to="/">
          <img
            src="https://img.icons8.com/windows/32/ffffff/home.png"
            alt="#"
          />
        </NavLink>
        <NavLink to="#">
          <img
            src="https://img.icons8.com/pastel-glyph/32/ffffff/search--v1.png"
            alt="#"
          />
        </NavLink>
        <NavLink to="#">
          <img
            src="https://img.icons8.com/ios/32/ffffff/plus-2-math.png"
            alt="#"
          />
        </NavLink>
        <NavLink to="#">
          <img
            src="https://img.icons8.com/material-outlined/32/ffffff/like--v1.png"
            alt="#"
          />
        </NavLink>
        <NavLink to="#">
          <img src="https://img.icons8.com/small/32/ffffff/user.png" alt="#" />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
