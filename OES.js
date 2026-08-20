/*
763. Sum of Two Numbers-2

Geekoin10
Easy
Topics
Problem Statement:
You are given Two Numbers, A and B. If C = A + B. Find C. Note: Round off the output to a single decimal place.


Input Description:
You are provided with two numbers A and B.


Output Description:
Find the sum of the two numbers (A + B)


Explanation:
1+1 = 2


Sample Input:
1
1


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

 function result(nums){
    
  const sum = nums.reduce((acc,cur)=>acc+cur,0);
  console.log(sum)
 }  

rl.on('close', () => {  

  const nums = userInput.map(n=>Number(n))  
 
result(nums)
});
