/*
128. Binary to Octal Conversion

Geekoin40
Medium
Topics
Problem Statement:
Given a binary number convert it into octal format.


Sample Input:
1100100


Sample Output:
144
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(k){
let binary = k
let decimal = parseInt(binary,2)
let octal = decimal.toString(8)
console.log(octal)
}
rl.on("close", () => {

 const k =Number(userInput[0])
 result(k)
});