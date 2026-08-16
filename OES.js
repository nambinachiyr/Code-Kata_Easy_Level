/*
120. Decimal to Binary Conversion

Geekoin40
Medium
Topics
Problem Statement:
Given a number N in decimal convert it into binary value.


Input Description:
Input Size : N <= 100000


Sample Input:
5


Sample Output:
101
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
console.log(n.toString(2))
}
rl.on("close", () => {
 const n = Number(userInput[0])
 
 result(n)
});