/*
152. Greatest Common Divisor

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N integers, find the greatest number which divides all the elements of the array.


Input Description:
Input Size : N <= 100000


Sample Input:
5
1 2 3 4 5


Sample Output:
1
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

  let greatestCommonDiviser = []
  let smallNum = nums.sort()[0]
  console.log(smallNum)
  for(let i = 1;i<=smallNum;i++){
    let divide = true
    for(let j = 0;j<=nums.length-1;j++){
    if(nums[j] % i !== 0){
        divide = false
        console.log(i,nums[j])      
      }

    }
    if(divide){
         if(!greatestCommonDiviser.includes(i)){
         greatestCommonDiviser.push(i)
       }
    }
    
  }
  console.log(greatestCommonDiviser[greatestCommonDiviser.length-1])
 }
  

rl.on('close', () => {
const n = Number(userInput[0])
const nums = userInput[1].split(' ').map(n=>Number(n))

result(n,nums)
});
