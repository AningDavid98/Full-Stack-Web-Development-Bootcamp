//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const adjust = {
  color: "blue",
};

function timeRange() {
  const hour = new Date().getHours();

  if (hour < 12) {
    adjust.color = "red";
    return "Good morning";
    heading;
  } else if (hour < 18) {
    adjust.color = "green";
    return "Good afternoon";
  } else {
    adjust.color = "blue";
    return "Good evening";
  }
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={adjust}>
      {timeRange()}
    </h1>
  </div>,
  document.querySelector("#root")
);
