/*
110. Divisibility Check of a Number

Geekoin50
Medium
Topics
Problem Statement:
Given a number N, check if N is divisible by any number less than N (ie.,it leaves no remainder)except 1.


Input Description:
Input Size : 1 <= N <= 100000


Sample Input:
10


Sample Output:
yes

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
  let isDivisible = false
 for(let i = 2;i<n;i++){
  let divider = n/i
  if(Number.isInteger(divider)){
      isDivisible = true
      break
  }
 }
 console.log(isDivisible?"yes":"no")
}
rl.on("close", () => {
 const n = Number(userInput[0])

 result(n)
});