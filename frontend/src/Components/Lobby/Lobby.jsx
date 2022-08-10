import React from "react";
import "./Lobby.css";
import LobbyBar from "./LobbyBar";
import games from "../Scripts/games.json";
const Lobby = (props) => {
  const matchStats = [
    {
      leagueName: "EGYPTIAN PREMIERE LEAGUE",
      matchData: [
        {
          statusOfMatch: "live",
          FirstClubName: "REAL MADRID",
          FirstClubScore: "2",
          FirstClubPredictionPoints: "68",
          SecondClubName: "BARCELONA",
          SecondClubScore: "0",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
        {
          statusOfMatch: "live",
          FirstClubName: "REAL MADRID",
          FirstClubScore: "2",
          FirstClubPredictionPoints: "68",
          SecondClubName: "BARCELONA",
          SecondClubScore: "0",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
        {
          statusOfMatch: "live",
          FirstClubName: "REAL MADRID",
          FirstClubScore: "2",
          FirstClubPredictionPoints: "68",
          SecondClubName: "BARCELONA",
          SecondClubScore: "0",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
        {
          statusOfMatch: "ft",
          FirstClubName: "REAL MADRID",
          FirstClubScore: "2",
          FirstClubPredictionPoints: "68",
          SecondClubName: "BARCELONA",
          SecondClubScore: "0",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
      ],
    },
    {
      leagueName: "LA LIGA",
      matchData: [
        {
          statusOfMatch: "ft",
          FirstClubName: "ADRID",
          FirstClubScore: "2",
          FirstClubPredictionPoints: "68",
          SecondClubName: "BARCELONA",
          SecondClubScore: "1",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
        {
          statusOfMatch: "ft",
          FirstClubName: "ADRID",
          FirstClubScore: "2",
          FirstClubPredictionPoints: "68",
          SecondClubName: "BARCELONA",
          SecondClubScore: "1",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
        {
          statusOfMatch: "ft",
          FirstClubName: "DRID",
          FirstClubScore: "9",
          FirstClubPredictionPoints: "68",
          SecondClubName: "BNA",
          SecondClubScore: "0",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
        {
          statusOfMatch: "live",
          FirstClubName: "REAL MADRID",
          FirstClubScore: "7",
          FirstClubPredictionPoints: "68",
          SecondClubName: "CELONA",
          SecondClubScore: "0",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
        {
          statusOfMatch: "ft",
          FirstClubName: " MADRID",
          FirstClubScore: "2",
          FirstClubPredictionPoints: "68",
          SecondClubName: "BARCELONA",
          SecondClubScore: "0",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
      ],
    },
  ];

  return (
    <div>
      {/* {matchStats.map((match_data, index) => (
        <div className="main_lobbyBar" key={index}>
          <div className="league_Name_main_div">
            <span className="league_Name">{match_data.leagueName}</span>
          </div>

          <hr className="hr_lobbyBar" />

          <div className="lobbyBar_div">
            <LobbyBar match_data={match_data.matchData} />
          </div>
        </div>
      ))} */}
      {games.map((key) => (
        <div className="main_lobbyBar" key={key}>
          <div className="league_Name_main_div">
            <span className="league_Name">{key.sport_title}</span>
          </div>

          <hr className="hr_lobbyBar" />

          <div className="lobbyBar_div">
            <LobbyBar match_data={games} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lobby;
