/*
894. Number Half Pyramid Pattern-6

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
From the given input R=5, Print from 55555 in first line and reduced by 1 number, print from 4444 in second line repeat this process until 1.


Sample Input:
5


Sample Output:


55555  
4444  
333  
22  
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
   
   for(let j=1; j<=row; j++){
    str+=row
   }
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
