/*
158. Odd Digit Sum Check

Geekoin50
Medium
Topics
Problem Statement:
A number is given as input. Find the odd digits in the number, add them and find if the sum is odd or not. If even print E, if odd print O.


Input Description:
Input Size : N <= 10000000000


Output Description:
If the sum of odd digits is even print E, if odd print O.


Sample Input:
413


Sample Output:
E

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});


 function result(nums){
    const sum = nums.reduce((acc,cur)=>acc+cur,0)
    console.log(sum%2===0?"E":"O")
 }
  

rl.on('close', () => {  
  const nums = userInput[0].split('').map(n=>Number(n)) 
result(nums)
});
