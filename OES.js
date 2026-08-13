/*
79. Sorted Prime Factors

Geekoin50
Medium
Topics
Problem Statement:
Given a number N, print their prime factors in sorted order.


Input Description:
The input consists of a number N, where 2 <= N <= 100000.


Sample Input:
18
Sample Output:
2 3
*/

const { match } = require('assert');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n){
  let i = 2
  let factors = []
  for(let i = 2;i<=n;i++){
    if(n%i===0){
      if(!factors.includes(i)){
         factors.push(i)
      }
      
      while(n%i===0){
        n = n/i
        console.log(n)
      }
    }
  }
  console.log(factors.join(' '))
 }

rl.on("close", () => {
  const n = Number(userInput[0])
  result(n)
});