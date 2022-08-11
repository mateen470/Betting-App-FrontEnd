import React from "react";
const StartingSoonChild = ({ startSoon }) => {
  return (
    <div className="liveEventChild-root_div">
      {startSoon.map((data, index) => (
        <div className="liveEventChild_main" key={index}>
          <div className="StartSoonTime_box">
            <div className=" startsoonTime">
              <p className="startSoonTime_para">STARTING SOON IN {data.time} MIN</p>
            </div>
          </div>
          <p className="addition">+12</p>
          <div className="match_detail_main">
            <div className="blackBox_main">
              <div className="team1_main">
                <div className="team1Name_Score">
                  <p className="team1Name">{data.teamName1}</p>
                  <p className="score">{data.team1score}</p>
                </div>
                <div className="teamInfo">
                  <div className="clubName_Points_blackBox">
                    <p className="clubName">{data.clubeName1}</p>
                    <p className="clubRating">{data.clubRating1}</p>
                  </div>
                  <p className="clubStatus">{data.status}</p>
                </div>
              </div>

              <img
                className="tvShow"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bullish.png"
                alt="increaseLogo"
              />
              <hr className="divider" />
              <img
                className="increase"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bullish.png"
                alt="increaseLogo"
              />
              <div className="team2_main">
                <div className="team2Name_Score">
                  <p className="team2Name">{data.teamName12}</p>
                  <p className="score2">{data.team2score}</p>
                </div>

                <div className="teamInfo2">
                  <div className="clubName_Points_blackBox">
                    <p className="clubName">{data.clubeName2}</p>
                    <p className="clubRating">{data.clubRating2}</p>
                  </div>
                  <p className="clubStatus">{data.status}</p>
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
