import React from "react";
import "./LiveEvents.css";
const LiveEventChild = ({ event }) => {
  return (
    <div className="liveEventChild-root_div">
      {event.map((key) => (
        <div className="liveEventChild_main" key={key}>
          <div className="liveBox">
            <div className="live_size_matchType_main_div">
              <div className="live_text_main">
                <p className="liveText">LIVE</p>
              </div>
            </div>
            <p className="size">{key.size}</p>
            <p className="quarterNumber">{key.commence_time}</p>
          </div>
          <div className="score_detail_main_div">
            <p className="score_detail_main_div_text1">{key.home_team}</p>
            <p className="score_detail_main_div_text2">? - ?</p>
            <p className="score_detail_main_div_text3">{key.away_team}</p>
          </div>
          <p className="addition">+12</p>
          <div className="match_detail_main">
            <div className="blackBox_main">
              <div className="team1_main">
                <div className="team1Name_Score">
                  <p className="team1Name">{key.home_team}</p>
                  <p className="score">
                    {Math.round(
                      100 / key.bookmakers[0].markets[0].outcomes[0].price
                    )}
                  </p>
                </div>
                <div className="teamInfo">
                  <div className="clubName_Points_blackBox">
                    <p className="clubName">{key.home_team}</p>
                    <p className="clubRating">
                      {key.bookmakers[0].markets[0].outcomes[0].price}
                    </p>
                  </div>
                  <p className="clubStatus">{"OPEN"}</p>
                </div>
              </div>
              <div className="draw_div_liveEvents">
                <p className="p1_liveEvent">DRAW</p>
                <p className="p2_liveEvent">
                  {key.bookmakers[0].markets[0].outcomes.length > 2
                    ? key.bookmakers[0].markets[0].outcomes[2].price
                    : "NaN"}
                </p>
              </div>
              <img
                className="tvShow"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/tv-show.png"
                alt="tvShowLogo"
              />
              <hr className="divider" />
              <img
                className="increase"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bullish.png"
                alt="increaseLogo"
              />
              <div className="team2_main">
                <div className="team2Name_Score">
                  <p className="team2Name">{key.away_team}</p>
                  <p className="score2">
                    {Math.round(
                      100 / key.bookmakers[0].markets[0].outcomes[1].price
                    )}
                  </p>
                </div>

                <div className="teamInfo2">
                  <div className="clubName_Points_blackBox">
                    <p className="clubName">{key.away_team}</p>
                    <p className="clubRating">
                      {key.bookmakers[0].markets[0].outcomes[1].price}
                    </p>
                  </div>
                  <p className="clubStatus">{"OPEN"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveEventChild;
