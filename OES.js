/*
891. Number Half Pyramid Pattern-3

Geekoin40
Medium
Topics
Problem Statement:
Write a code to generate a half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number half pyramid pattern with the size R.


Sample Input:
5


Sample Output:


4321  
321  
21  
1  

Explanation:
From the given input R=5, print from 5 to 1 and reduced by 1 number, print from 4 to 1 and 3 to 1, 2 to 1 print 1 at end.

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

  for(let row = 1; row<=n; row++){
    let str = ''
   
   for(let j=n+1-row; j>=1; j--){
    str+=j
   }
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
