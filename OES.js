/*
35. String Length Without Functions

Geekoin30
Easy
Topics
Problem Statement:
Given a string S, find its length(including the spaces)without using any pre-defined functions.


Sample Input:
codekata


Sample Output:
8


*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

inp.on("close", () => {
  console.log(userInput) 
  const sentance = userInput[0].split('')
  console.log(sentance.length)  
  
});