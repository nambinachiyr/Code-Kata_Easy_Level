/*
129. Binary to Hexadecimal Conversion

Geekoin40
Medium
Topics
Company
Problem Statement:
Given a binary number convert it to hexadecimal.


Sample Input:
1100100


Sample Output:
64
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
let hex = decimal.toString(16).toUpperCase() //this is importent for hex->toUpperCase()
console.log(hex)
}
rl.on("close", () => {

 const k =  userInput[0] //->import ent points dont convert string to Number for finding binary search
 result(k)
});