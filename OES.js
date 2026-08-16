/*
121. Binary to Decimal Conversion

Geekoin40
Medium
Topics
Problem Statement:
Given a number N in binary format convert it to decimal number.


Input Description:
N <= 10^18


Sample Input:
101


Sample Output:
5
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n){
  // console.log(typeof n )
  let decimal = parseInt(n,2)
console.log(decimal)  

}
rl.on("close", () => {
 const n = userInput[0]
 
 result(n)
});