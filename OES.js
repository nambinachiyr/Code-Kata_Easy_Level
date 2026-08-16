/*
106. Sine of an Angle

Geekoin40
Medium
Topics
Problem Statement:
Given an angle A, print the sine of the given angle.


Sample Input:
30


Sample Output:
0.5

*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(degree){

  // This is a big hard bcz 
  // First we fit the radian like θ this is the formula for radian 
  // -> let radian = degree * Math.PI / 180 (deg*π/180)

  let radian = degree*Math.PI/180
  console.log(radian)
  let answer = Math.sin(radian).toFixed(1)

 console.log(answer)
 }



rl.on("close", () => {
 const n = userInput[0]
 let degree = Number(n)

 result(degree)
});