/*
873. Number Half Pyramid Pattern

Geekoin30
Easy
Topics
Problem Statement:
Generate a half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the half pyramid pattern based on the given integer R.


Explanation:
From the given input R=5, print the half pyramid number pattern upto R row.


Sample Input:
5


Sample Output:


1  
12  
123  
1234  
12345  


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
 
  for(let row = 1 ;row<=nums;row++){
    let str = ''
    for(let i = 1;i<=row;i++){
      str +=i 
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
