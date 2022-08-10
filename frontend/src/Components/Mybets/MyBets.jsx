import React from "react";
import "./MyBets.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const MyBets = () => {
  const [allBets, setallBets] = React.useState([
    {
      Event: "Smouha SC vs Al Ahly",
      Sports: "soccer",
      Time: "8:47 pm",
      Odds: "1.7",
    },
    {
      Event: "Smouha SC vs Al Ahly",
      Sports: "soccer",
      Time: "8:47 pm",
      Odds: "1.7",
    },
    {
      Event: "Smouha SC vs Al Ahly",
      Sports: "soccer",
      Time: "8:47 pm",
      Odds: "1.7",
    },
    {
      Event: "Smouha SC vs Al Ahly",
      Sports: "soccer",
      Time: "8:47 pm",
      Odds: "1.7",
    },
    {
      Event: "Smouha SC vs Al Ahly",
      Sports: "soccer",
      Time: "8:47 pm",
      Odds: "1.7",
    },
    {
      Event: "Smouha SC vs Al Ahly",
      Sports: "soccer",
      Time: "8:47 pm",
      Odds: "1.7",
    },
    {
      Event: "Smouha SC vs Al Ahly",
      Sports: "soccer",
      Time: "8:47 pm",
      Odds: "1.7",
    },
    {
      Event: "Smouha SC vs Al Ahly",
      Sports: "soccer",
      Time: "8:47 pm",
      Odds: "1.7",
    },
    {
      Event: "Smouha SC vs Al Ahly",
      Sports: "soccer",
      Time: "8:47 pm",
      Odds: "1.7",
    },
    {
      Event: "Sha SC vs Al Ahly",
      Sports: "soer",
      Time: "8: pm",
      Odds: "1.",
    },
  ]);
  return (
    <div className="My_Bets_root_div">
      <div className="bar">
        <div className="Buttons_MyBet_main_div">
          <button className="allBetsButton">
            <NavLink to={"/MyBets/AllBets"}>ALL BETS</NavLink>
          </button>
          <button className="latestButton">LATEST</button>
          <button className="historyButton">HISTORY</button>
        </div>
      </div>
      <Table
        className="table table-striped"
        striped
        bordered
        hover
        variant="dark"
      >
        <thead>
          <tr className="row_with_heading">
            <th className="first">Event</th>
            <th>Sports</th>
            <th>Time</th>
            <th className="last">odds</th>
          </tr>
        </thead>
        <tbody>
          {allBets.map((bet, index) => (
            <tr key={index}>
              <td className="first">{bet.Event}</td>
              <td>{bet.Sports}</td>
              <td>{bet.Time}</td>
              <td className="last">{bet.Odds}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyBets;
