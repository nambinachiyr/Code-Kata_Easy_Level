/*
151. Smallest Divisible Number

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N integers, find the smallest number divisible by all the elements of the array.


Input Description:
Input Size : N <= 100000


Output Description:
The smallest number divisible by all the elements of the array.


Sample Input:
5
1 2 3 4 5


Sample Output:
60
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

  let smallestNumber = []
  for(let i = 1;i<=100000;i++){
    let divide = true
    for(let j = 0;j<=nums.length-1;j++){
      if(i % nums[j] !== 0){
        divide = false
        break
        console.log(i,nums[j])
      }
    }
    if(divide){
      smallestNumber.push(i)
    }
  }
  console.log(smallestNumber[0])
 }
  

rl.on('close', () => {
const n = Number(userInput[0])
const nums = userInput[1].split(' ').map(n=>Number(n))

result(n,nums)
});
