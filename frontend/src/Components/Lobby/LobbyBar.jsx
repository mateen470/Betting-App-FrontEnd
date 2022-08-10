import React, { useState } from "react";

const LobbyBar = ({ match_data }) => {
  return (
    <div className="lobbyBar_main_div">
      {match_data.map((key) => (
        <div className="main" key={key}>
          <div className="match_status">
            {/* <p
              style={{
                background:
                  data.statusOfMatch === "live" ? "#ee0202" : "#5E5E5E",
              }}
            >
              {data.statusOfMatch}
            </p> */}
          </div>
          <div className="box_div">
            <div className="box1">
              <p className="p1">{key.home_team}</p>
              <p className="p2">
                {key.bookmakers[0].markets[0].outcomes[0].price}
              </p>
            </div>
            <div className="box2">
              <p className="p1">DRAW</p>
              <p className="p2">
                {key.bookmakers[0].markets[0].outcomes.length > 2
                  ? key.bookmakers[0].markets[0].outcomes[2].price
                  : "NaN"}
              </p>
            </div>
            <div className="box3">
              <p className="p1">{key.away_team}</p>
              <p className="p2">
                {key.bookmakers[0].markets[0].outcomes[1].price}
              </p>
            </div>
          </div>
          <div className="text_div">
            <p className="text1">{key.home_team}</p>
            <p className="text2">? - ?</p>
            <p className="text3">{key.home_team}</p>
            <div className="downArrow_lobby">↓</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LobbyBar;
