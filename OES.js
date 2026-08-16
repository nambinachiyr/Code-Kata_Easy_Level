/*
112. Bitwise OR of Array Elements

Geekoin40
Medium
Topics
Company
Problem Statement:
Given a number N and an array of N elements, find the Bitwise OR of the array elements.


Input Description:
Input Size : N <= 100000


Output Description:
The output is the Bitwise OR of the array elements.


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
  let preValue = arr[0]
 for(let i= 0;i<arr.length;i++){
   if(i!==arr.length-1){
     preValue = preValue | arr[i]
    }
 }
 console.log(preValue)
}
rl.on("close", () => {
 const n = Number(userInput[0])
 const arr = userInput[1].split(' ').map(n=>Number(n))

 result(n,arr)
});