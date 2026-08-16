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

function result(n,k){
  let sumOfOdd = 0
  for(let i = n;i<=k;i++){
    if(i%2!==0){
      sumOfOdd = sumOfOdd +i
    }
  }
  console.log(sumOfOdd)
}
rl.on("close", () => {
 const [n,k] = userInput[0].split(' ').map(n=>Number(n))
 result(n,k)
});