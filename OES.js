/*
885. Half Pyramid Number Pattern

Geekoin30
Easy
Topics
Problem Statement:
Write a code to generate a half pyramid number pattern.


Input Description:
Given an even integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number pattern based on the given integer R.


Explanation:
From the given input R=5, you have to print 1 to 5 in first line,then print 1 to 4 in next line follow the rule ending with number 1.


Sample Input:
5


Sample Output:


12345  
1234  
123  
12  
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

 function result(n){

  for(let row = n; row>=1; row--){
    let str = ''
   for(let j = 1;j<=row;j++){
     str+=j
   }
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
