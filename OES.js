/*
73. Sum of Squares of Digits

Geekoin50
Medium
Topics
Problem Statement:
Given a number N, print the sum of the squares of its digits.


Input Description:
The input consists of a number N, where 1 <= N <= 1000000000000000000.


Output Description:
The output is the sum of the squares of the digits of N.


Sample Input:
19

Sample Output:
82
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(nums){
  let add = 0
  for(let n of nums){
    add = add+n*n
  }
  console.log(add)
 }

rl.on("close", () => {
  let nums = userInput[0].split("") .map(n=>Number(n))
  
  result(nums)
});