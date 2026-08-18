/*
156. Minimum Subarray Sum-2

Geekoin40
Medium
Topics
Problem Statement:
Given a number N and an array of N integers, print the minimum sum of the sub-array from the given array.


Input Description:
Input Size : N <= 100000


Sample Input:
4
2 4 4 2


Sample Output:
2
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
  let hasNagative = false
  for(let num of nums){
    if(num<0){
      hasNagative=true
    }
  }

  
  if(!hasNagative){
    const smallSubArrySum = Math.min(...nums)
    console.log(smallSubArrySum)
  }else{
    let currentSubArrySum = nums[0]
    let minSum = nums[0]
    for(let i = 0 ;i<nums.length-1;i++){
       currentSubArrySum = Math.min(nums[i],currentSubArrySum+nums[i])
      //  console.log(currentSubArrySum,"Loop - ",i)
       minSum = Math.min(minSum,currentSubArrySum)
      //  console.log(minSum,"Loop - ",i)
    }
    console.log(minSum)
  }
  
 }
  

rl.on('close', () => {  
  const n = userInput[0]
  const nums = userInput[1].split(' ').map(n=>Number(n)) 
result(n,nums)
});
