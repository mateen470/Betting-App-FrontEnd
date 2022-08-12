import React from "react";
import "./Lobby.css";
import LobbyBar from "./LobbyBar";
import games from "../Scripts/games.json";
const Lobby = () => {
  return (
    <div>
      {games.map((key) => (
        <div className="main_lobbyBar" key={key}>
          <div className="league_Name_main_div">
            <span className="league_Name">{key.sport_title}</span>
          </div>

          <hr className="hr_lobbyBar" />

          <div className="lobbyBar_div">
            <LobbyBar match_data={games} leagueName={key.sport_title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lobby;
