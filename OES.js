/*
138. Suffix Sum of an Array

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N elements, print the suffix sum of the array.


Input Description:
The input consists of an integer N, representing the number of elements, followed by N integers forming the array. N is at most 100000.


Sample Input:
4
2 4 4 2


Sample Output:
12 10 6 2
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
  for(let i =n-1;i!==0;i--){
    nums[i-1] = nums[i]+nums[i-1]
  }
  console.log(nums.join(' '))
}

rl.on('close', () => {
const n = Number(userInput[0])
const nums = userInput[1].split(' ').map(n=>Number(n))
// console.log(n,nums)
 result(n,nums)
});
