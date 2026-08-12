/*
76. Find the Unique Number-2

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N elements, every number is repeated except for one. Print that one number.


Input Description:
Input Size : 1 <= N <= 100000


Sample Input:
10
1 2 3 2 3 3 2 5 5 2


Sample Output:
1
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,nums){
  let uniqueOne;
  for(let i = 0 ;i<n;i++){
    let count = 0
    for(let j = 0;j<n;j++){
       if(nums[i]===nums[j]){
         count++
       }
    }if(count===1){
      uniqueOne = nums[i]
      // console.log(nums[i])
      break
    }
  }
  n===1?console.log(nums[0]):console.log(uniqueOne)
 }

rl.on("close", () => {
  let n = Number(userInput[0] )
  let nums = userInput[1].split(' ').map(n=>Number(n))
  result(n,nums)
});