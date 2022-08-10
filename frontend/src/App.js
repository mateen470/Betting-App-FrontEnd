import {React,useState,useEffect} from "react";
import "./App.css";
import SideBar from "./Components/Sidebar/SideBar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <LandingPage />
    </div>
  );
};

export default App;
