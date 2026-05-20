import React from "react";
import ReactDOM from "react-dom";

const fName = "David Aning";
const lName = "Amponsah";
const luckyNumber = 98;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName} !
    </h1>
    <p>your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
