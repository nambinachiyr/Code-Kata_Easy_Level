/*
118. Permutation Calculation

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers N,K print the value of nPk(P-Permutation).


Input Description:
Input Size : K <= N <= 10


Sample Input:
5 2


Sample Output:
20

*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr){

  // N items-la K items-a eduthu, ethana different orders-la arrange panna mudiyum?
  // Like 12345->345,543,435,123,321,231...like that
  // N- array's Element, K-how many number take out of the array and changing

  let Permutate ;
//  Permulate Formula -> 6!/(6-4)! = 360
// This is Math 
//For Coding la answer = answer*(n),  answer*(n-1),answer*(n-2) 


let answer = 1
for(let i = 0;i<arr[1];i++){
 answer = answer*(arr[0]-i)
//  console.log(answer)
}
console.log(answer)
 
}
rl.on("close", () => {
//  const n = Number(userInput[0])
 const arr = userInput[0].split(' ').map(n=>Number(n))
 result(arr)
});