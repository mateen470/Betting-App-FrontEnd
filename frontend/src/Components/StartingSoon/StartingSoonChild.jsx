import React from "react";
import "./StartSoon.css";
const StartingSoonChild = ({ startSoon, title }) => {
  return (
    <div className="startingSoonEventChild-root_div">
      {startSoon.map((data, index) => (
        <div className="startingSoonEventChild_main" key={index}>
          <hr className="startingLine" />
          <div className="startSoonBox">
            <div className="startSoonText1">
              STARTING SOON IN {data.time} MIN
            </div>
            <div className="startSoonText">About To Start</div>
            <img
              className="tvShow1_StartSoon"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/tv-show.png"
              alt="tvShowLogo"
            />

            <img
              className="increase1_StartSoon"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bullish.png"
              alt="increaseLogo"
            />
          </div>
          <div className="TeamNames">
            {data.teamName1} - {data.teamName12}
          </div>
          <div className="teamTitle" style={{ marginBottom: "1rem" }}>
            {title}
          </div>
          <p className="addition_StartSoon">+12</p>
          <div className="match_detail_main_startSoon">
            <div className="blackBox_main_startSoon">
              <div className="team1_main_startSoon">
                <div className="team1Name_Score_startSoon">
                  <p className="team1Name_startSoon">{data.teamName1}</p>
                  <p className="score_startSoon">{data.team1score}</p>
                </div>
                <div className="teamInfo">
                  <div className="clubName_Points_blackBox_startSoon">
                    <p className="clubName_startSoon">{data.clubeName1}</p>
                    <p className="clubRating_startSoon">{data.clubRating1}</p>
                  </div>
                  <p className="clubStatus_startSoon">{data.status}</p>
                </div>
              </div>
              <div className="draw">
                <div className="drawBlacBox">
                  <p className="drawText">DRAW</p>
                  <p className="drawRating">{data.clubRating1}</p>
                </div>
              </div>
              <img
                className="tvShow_StartSoon"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bullish.png"
                alt="tvShowLogo"
              />
              <hr className="divider" />
              <img
                className="increase_StartSoon"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bullish.png"
                alt="increaseLogo"
              />
              <div className="team2_main_startSoon">
                <div className="team2Name_Score_startSoon">
                  <p className="team2Name_startSoon">{data.teamName12}</p>
                  <p className="score2_startSoon">{data.team2score}</p>
                </div>

                <div className="teamInfo2_startSoon">
                  <div className="clubName_Points_blackBox_startSoon">
                    <p className="clubName_startSoon">{data.clubeName2}</p>
                    <p className="clubRating_startSoon">{data.clubRating2}</p>
                  </div>
                  <p className="clubStatus_startSoon">{data.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StartingSoonChild;
