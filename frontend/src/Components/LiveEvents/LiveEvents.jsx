import React, { useState } from "react";
import "./LiveEvents.css";
import LiveEventMatch from "./LiveEventChild";
import games from "../Scripts/games.json";
const LiveEvents = () => {
  const [events, setEvents] = React.useState([
    {
      title: "International youth / Under 19 women championship europe",
      matchData: [
        {
          size: "18'",
          matchType: "3rd qarter",
          teamName1: "sweden",
          clubeName1: "soma sc",
          status: "open",
          clubRating1: "3.08",
          clubRating2: "5",
          team1score: "70",
          team2score: "36",
          teamName12: "slovania",
          clubeName2: "svania",
          status2: "open",
        },
      ],
    },
    {
      title: "International youth / Under 19 women championship europe",
      matchData: [
        {
          size: "18'",
          matchType: "3rd qarter",
          teamName1: "sweden",
          clubeName1: "soma sc",
          status: "open",
          clubRating1: "3.08",
          clubRating2: "5",
          team1score: "70",
          team2score: "36",
          teamName12: "slovania",
          clubeName2: "svania",
          status2: "open",
        },
      ],
    },
    {
      title: "International youth / Under 19 women championship europe",
      matchData: [
        {
          size: "18'",
          matchType: "3rd qarter",
          teamName1: "sweden",
          clubeName1: "soma sc",
          status: "open",
          clubRating1: "3.08",
          clubRating2: "5",
          team1score: "70",
          team2score: "36",
          teamName12: "slovania",
          clubeName2: "svania",
          status2: "open",
        },
      ],
    },

    {
      title: "International youth / Under 19 women championship europe",
      matchData: [
        {
          size: "18'",
          matchType: "3rd qarter",
          teamName1: "sweden",
          clubeName1: "soma sc",
          status: "open",
          clubRating1: "3.08",
          clubRating2: "5",
          team1score: "70",
          team2score: "36",
          teamName12: "slovania",
          clubeName2: "svania",
          status2: "open",
        },
        {
          size: "18'",
          matchType: "3rd qarter",
          teamName1: "sweden",
          clubeName1: "soma sc",
          status: "open",
          clubRating1: "3.08",
          clubRating2: "5",
          team1score: "70",
          team2score: "36",
          teamName12: "slovania",
          clubeName2: "svania",
          status2: "open",
        },
        {
          size: "18'",
          matchType: "3rd qarter",
          teamName1: "sweden",
          clubeName1: "soma sc",
          status: "open",
          clubRating1: "3.08",
          clubRating2: "5",
          team1score: "70",
          team2score: "36",
          teamName12: "slovania",
          clubeName2: "svania",
          status2: "open",
        },
        {
          size: "18'",
          matchType: "3rd qarter",
          teamName1: "sweden",
          clubeName1: "soma sc",
          status: "open",
          clubRating1: "3.08",
          clubRating2: "5",
          team1score: "70",
          team2score: "36",
          teamName12: "slovania",
          clubeName2: "svania",
          status2: "open",
        },
        {
          size: "18'",
          matchType: "3rd qarter",
          teamName1: "sweden",
          clubeName1: "soma sc",
          status: "open",
          clubRating1: "3.08",
          clubRating2: "5",
          team1score: "70",
          team2score: "36",
          teamName12: "slovania",
          clubeName2: "svania",
          status2: "open",
        },
        {
          size: "18'",
          matchType: "3rd qarter",
          teamName1: "sweden",
          clubeName1: "soma sc",
          status: "open",
          clubRating1: "3.08",
          clubRating2: "5",
          team1score: "70",
          team2score: "36",
          teamName12: "slovania",
          clubeName2: "svania",
          status2: "open",
        },
      ],
    },
  ]);
  return (
    <div className="liveEvents">
      <div className="liveEventHeading_main">
        <p className="liveEventsHeading">LIVE EVENTS</p>
      </div>
      {games.map((key) => (
        <div key={key} className="event_main">
          <div className="eventHeading_main">
            <p className="eventHeading">{key.sport_title}</p>
          </div>
          <hr className="line" />
          <div className="liveEvent_match">
            <LiveEventMatch event={games} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveEvents;
