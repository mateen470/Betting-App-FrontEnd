import React from "react";
import "./LiveEvents.css";
import LiveEventMatch from "./LiveEventChild";
import games from "../Scripts/games.json";
const LiveEvents = () => {
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
