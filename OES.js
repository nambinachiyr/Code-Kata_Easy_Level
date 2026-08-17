/*
137. Prefix Sum Array

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N elements, print the prefix sum array.


Input Description:
Input Size : N <= 100000


Output Description:
The output is the prefix sum array.


Sample Input:
4
2 4 4 2


Sample Output:
2 6 10 12
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
  for(let i =0;i<n-1;i++){
    nums[i+1] = nums[i+1]+nums[i]
  }
  console.log(nums.join(' '))
}

rl.on('close', () => {
const n = Number(userInput[0])
const nums = userInput[1].split(' ').map(n=>Number(n))
// console.log(n,nums)
 result(n,nums)
});
