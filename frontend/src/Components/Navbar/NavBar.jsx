import { React, useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Btn from "../ConnectWallet/Btn";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div>
      <div>{isOpen && <Login handleClose={togglePopup}></Login>}</div>
      <div>{isOpen2 && <Register handleClose={togglePopup2}></Register>}</div>
      <div className="top_bar">
        <div className="logo_topBar">
          <img src={logo} alt="#" />
        </div>
        <div className="btn_topBar">
          <NavLink to={"/"}>
            <span onClick={togglePopup} className="topBar_signIn">
              Sign in
            </span>
          </NavLink>
          <NavLink to={"/"}>
            <span onClick={togglePopup2} className="topBar_register">
              Register
            </span>
          </NavLink>
          <Btn />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
