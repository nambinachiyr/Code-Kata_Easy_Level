/*
119. Combination Calculation

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers N,K print the value of nCk(C-Combination).


Input Description:
Input Size : K <= N <= 10


Sample Input:
5 2


Sample Output:
10

*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,r){

  // Compination na orders matter illa  but permutation la order tha matter 
  // Like AB!= BA in compination
  // AB=BA in permutation
  let Permutate ;
//  Permulate Formula -> 6!/(6-4)! = 360
// This is Math 
//For Coding la answer = answer*(n),  answer*(n-1),answer*(n-2)
// But compination = answer*(n)/r 


let answer = 1
for(let i = 0;i<r;i++){
 answer = (answer*(n-i))/(r-i)
//  console.log(answer)
}
console.log(answer)
 
}
rl.on("close", () => {
//  const n = Number(userInput[0])
 const [n,r] = userInput[0].split(' ').map(n=>Number(n))
 result(n,r)
});