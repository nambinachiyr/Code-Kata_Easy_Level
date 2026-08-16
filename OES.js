/*
114. Bitwise NOT of a Number

Geekoin50
Medium
Topics
Company
Problem Statement:
Given a number N, print the Bitwise NOT of that number.


Input Description:
Input Size : 1 <= N <= 10000


Sample Input:
5


Sample Output:
-6
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
//  formula -> ~N= -(N+1)
 console.log(~n)
}
rl.on("close", () => {
 const n = Number(userInput[0])

 result(n)
});