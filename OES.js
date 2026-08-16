/*
113. Max Bitwise OR of Segments

Geekoin40
Medium
Company
Problem Statement:
Given a number N and an array of N integers, find the maximum of Bitwise OR of all segments.


Input Description:
Input Size : N <= 100000


Sample Input:
2
2 4


Sample Output:
6
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,arr){
  let maxValue = 0
  let preValue = arr[0]
 for(let i= 0;i<arr.length;i++){
   if(i!==arr.length){
     preValue = preValue | arr[i]
     if(maxValue<preValue){
      maxValue = preValue
     }

    }
 }
 console.log(maxValue)
}
rl.on("close", () => {
 const n = Number(userInput[0])
 const arr = userInput[1].split(' ').map(n=>Number(n))

 result(n,arr)
});