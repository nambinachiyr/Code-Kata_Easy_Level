/*
139. Prefix and Suffix Sum

Geekoin50
Medium
Topics
Problem Statement:
Given a numbers N, print the sum of prefix sum and suffix sum array for each position.


Input Description:
Input Size : N <= 10000


Sample Input:
4
2 4 4 2


Sample Output:
14 16 16 14
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(n,nums) {
    // console.log(nums[n-1-2]+nums[n-2])
    let preFix = [...nums]
    let sufFix = [...nums]

    for(let i = 0;i<n-1;i++){
     preFix[i+1] = preFix[i+1] + preFix[i]
    }

    for(let i = 0 ;i<n-1;i++){
      sufFix[(n-1)-(i+1)] =  sufFix[n-1-i] + sufFix[(n-1)-(i+1)]      
    }

    for(let i=0;i<nums.length;i++){
      nums[i] = preFix[i]+sufFix[i]
    }
  
  // console.log(preFix.join(' '))
  // console.log(sufFix.join(' '))
  console.log(nums.join(' '))
}

rl.on('close', () => {
const n = Number(userInput[0])
const nums = userInput[1].split(/\s+/).map(n=>Number(n))
// console.log(n,nums)
 result(n,nums)
});
