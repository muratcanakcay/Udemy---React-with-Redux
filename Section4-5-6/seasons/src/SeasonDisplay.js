import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    message: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    message: "Burr it's cold!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if ((month > 2) & (month < 9)) {
    return lat > 0 ? "summer" : "winter";
  } else return lat < 0 ? "summer" : "winter";
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { message, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{message}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
