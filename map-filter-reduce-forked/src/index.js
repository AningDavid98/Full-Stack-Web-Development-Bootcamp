import emojipedia from "./emojipedia.js";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(num) {
  return num * 2;
}

var dob = numbers.map(double);
console.log(dob);
//Filter - Create a new array by keeping the items that return true.

function great(x) {
  return x > 4;
}

var big = numbers.filter(great);
console.log(big);
//Reduce - Accumulate a value by doing something to each item in an array.
var red = numbers.reduce(function (accumulator, currentnumber) {
  return (accumulator += currentnumber);
});
console.log(red);
//Find - find the first item that matches from an array.
var fin = numbers.find(function (y) {
  return y > 50;
});
console.log(fin);
//FindIndex - find the index of the first item that matches.
var findind = numbers.findIndex(function (z) {
  return z > 10;
});

console.log(findind);

var meaning = emojipedia.map(function (entry) {
  return entry.meaning.substring(0, 100);
});

console.log(meaning);
