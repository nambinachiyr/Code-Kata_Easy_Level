/*
157. Conditional Prefix Sum Array

Geekoin50
Medium
Topics
Company
Problem Statement:
Given a number N and array of N integers, print the prefix sum array for each position if it is divisible by 2 else print the element itself.


Input Description:
The input consists of a number N, representing the size of the array, followed by N integers. The size N is at most 10000.


Sample Input:
4
2 4 4 4


Sample Output:
2 6 10 14
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});


 function result(n,nums){
    
   let previousSum = 0 

    for(let i = 0 ;i<n-1;i++){
      console.log(nums[i])
      previousSum = previousSum+nums[i+1]
      let preSub = nums[i+1]+nums[i]
      
      if(preSub % 2 === 0){
        nums[i+1] = preSub
      }else{
        nums[i] = previousSum
        console.log(previousSum)
    }
  }
console.log(nums.join(' '))  
 }
  

rl.on('close', () => {  
  const n = userInput[0]
  const nums = userInput[1].split(' ').map(n=>Number(n)) 
result(n,nums)
});
