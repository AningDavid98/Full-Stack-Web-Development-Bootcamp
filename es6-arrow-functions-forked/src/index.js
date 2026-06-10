import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => {
  return x * 2;
});
console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
const oldNumbers = numbers.filter((num) => {
  return num < 10;
});
console.log(oldNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var accNumber = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
});
console.log(accNumber);

////Find - find the first item that matches from an array.
const finNumber = numbers.find((num) => {
  return num > 10;
});
console.log(finNumber);

////FindIndex - find the index of the first item that matches.
const indNumber = numbers.findIndex((num) => {
  return num > 10;
});

console.log(indNumber);
