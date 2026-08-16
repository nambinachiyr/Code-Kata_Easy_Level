/*
125. Sum of First and Last Digits

Geekoin50
Medium
Topics
Problem Statement:
Given a number N, print the sum of its first and last digit.


Input Description:
Input Size : |N| <= 10000


Sample Input:
51233


Sample Output:
8
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(N){
  let sum = N[0]+N[N.length-1]
  console.log(sum)
}
rl.on("close", () => {
 const N = userInput[0].split('').map(n=>Number(n))
 result(N)
});