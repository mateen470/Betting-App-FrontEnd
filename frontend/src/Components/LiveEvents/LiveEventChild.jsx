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
          </div>
          <div className="liveEventTime">
            <p className="size">{key.size}</p>
            <p className="quarterNumber">{key.commence_time}</p>
          </div>
          <div className="liveAndEvent">
            <p className="EventTitle">
              International youth / Under 19 women championship europe
            </p>
            <p className="LiveText">LIVE</p>
          </div>
          <div className="Half">first Half</div>
          <div className="TeamNames-Points">
            <p className="homeTeamName">{key.home_team}</p>
            <p className="Points">2 - 0</p>
            <p className="awayTeamName">{key.away_team}</p>
          </div>
          <div className="additionAndScores">
            <p className="increment">12'</p>
            <p className="Score1">
              {Math.round(100 / key.bookmakers[0].markets[0].outcomes[0].price)}
            </p>
            <p className="Score2">
              {Math.round(100 / key.bookmakers[0].markets[0].outcomes[1].price)}
            </p>
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
                <div className="teamInfo_LiveEvents">
                  <div className="clubName_Points_blackBox">
                    <p className="clubName">{key.home_team}</p>
                    <p className="clubRating">
                      {key.bookmakers[0].markets[0].outcomes[0].price}
                    </p>
                  </div>
                  <p className="clubStatus">{"OPEN"}</p>
                </div>
              </div>
              <div className="drawLiveEvents">
                <p className="DrawText">Draw</p>
                <p className="DrawRating">1.08</p>
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
