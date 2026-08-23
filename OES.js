/*
872. Half Diamond Star Number Pattern

Geekoin50
Medium
Topics
Problem Statement:
Generate a half diamond pattern using stars and numbers in a palindromic pattern.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the half diamond pattern using stars and numbers in a palindromic pattern based on the given integer R.


Explanation:
From the given input R=3, print the half diamond pattern with number and star pattern in the form of palindromic number.


Sample Input:
3


Sample Output:


*  
*1*  
*121*  
*12321*  
*121*  
*1*  
*


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
 
  for(let row = 0 ;row<=nums;row++){
    let str = '*'
    for(let i = 1;i<=row;i++){
      str +=i 
    }
    for(let i = row-1;i>0;i--){
      str+=i
    }
    if(row!==0){
      str=str+'*'
    }
    console.log(str)
  }
   
  for(let row = nums-1 ;row>=0;row--){
    let str = '*'
    for(let i = 1;i<=row;i++){
      str +=i 
    }
    for(let i = row-1;i>0;i--){
      str+=i
    }
    if(row!==0){
      str=str+'*'
    }
    console.log(str)
  }
  }
 

rl.on('close', () => {  

  const nums = userInput.map(n=>Number(n))  
 
if(nums<=100 && nums>=1){
  result(nums[0])
}
});
