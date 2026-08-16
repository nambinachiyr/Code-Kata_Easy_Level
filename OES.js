/*
108. Odd Factors of a Number

Geekoin40
Medium
Topics
Problem Statement:
Given a number N, print the odd factors for the N.


Input Description:
The input consists of a single integer N, where 1 <= N <= 1000.


Sample Input:
9


Sample Output:
1 3 9

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
  // console.log(n)
  let factors = []
  let num = n
  for(let i = 1;i<=num;i++){
    
  if(i%2!==0){
    let f=n/i
   if(Number.isInteger(f)){
    factors.push(i)
   }
  }
  // console.log(n)
  }
  console.log(factors.join(' '))
}
rl.on("close", () => {
 const n = Number(userInput[0])

 result(n)
});