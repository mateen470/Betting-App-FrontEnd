import React from "react";
import "./StartSoon.css";
import StartSoonChild from "./StartingSoonChild";
const StartingSoon = () => {
  const [startSoonEvent, setStartSoonEvent] = React.useState([
    {
      title: "International youth / Under 19 women championship europe",
      matchData: [
        {
          size: "18'",
          matchType: "3rd qarter",
          teamName1: "sw",
          clubeName1: "soma sc",
          status: "open",
          clubRating1: "3.08",
          clubRating2: "5",
          team1score: "70",
          time: "1",
          team2score: "36",
          teamName12: "slania",
          clubeName2: "svania",
          status2: "open",
        },
      ],
    },
    {
      title: "LA LIGA Under 19 women championship europe",
      matchData: [
        {
          size: "28'",
          matchType: " qarter",
          teamName1: "scceden",
          time: "8",
          clubeName1: "sdadfma sc",
          status: "open",
          clubRating1: "3.0ac",
          clubRating2: "5",
          team1score: "7faf0a",
          team2score: "3faf6d",
          teamName12: "svafafania",
          clubeName2: "vanfafafia",
          status2: "en",
        },
      ],
    },
  ]);
  return (
    <div className="liveEvents_startSoon">
      <div className="liveEventHeading_main_startSoon">
        <p className="liveEventsHeading_startSoon">STARTING SOON</p>
      </div>
      {startSoonEvent.map((startSoon, index) => (
        <div key={index} className="event_startSoon">
          <div className="eventHeading_main" style={{ marginTop: "1.8rem" }}>
            <p className="eventHeading_startSoon">{startSoon.title}</p>
          </div>
          <hr className="line_startSoon" />
          <div className="liveEvent_match_startSoon">
            <StartSoonChild
              startSoon={startSoon.matchData}
              title={startSoon.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StartingSoon;
