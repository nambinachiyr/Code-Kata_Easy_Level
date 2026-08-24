/*
893. Number Half Pyramid Pattern-5

Geekoin30
Easy
Topics
Problem Statement:
Write a code to generate a half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number half pyramid pattern with the size R.


Explanation:
From the given input R=5, print from 1 in first line and increased by 1 number, print from 22 in second line repeat this process until reach R print R in R times.


Sample Input:
5


Sample Output:


1  
22  
333  
4444  
55555  

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
   
   for(let j=n+1-row; j<=n; j++){
    str+=row
   }
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
