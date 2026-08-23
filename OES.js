/*
878. Floyd's Triangle Generation

Geekoin30
Easy
Topics
Problem Statement:
Generate a floyd's triangle.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print a floyd's triangle based on the given integer R.


Explanation:
From the given input R= 5,print the floyd's triangle with the size 5.


Sample Input:
5


Sample Output:


1  
2 3  
4 5 6  
7 8 9 10  
11 12 13 14 15  

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
   let num = 1
  for(let row = 0 ;row<nums;row++){
    let str = ''
  for(let n = 0;n<=row;n++){
    if(n===row){
      str+=num
    }else{
      str += (num)+' '
    }
    num++
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
