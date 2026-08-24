/*
889. Inverted Number Half Pyramid

Geekoin30
Easy
Topics
Problem Statement:
Write a code to generate a inverted half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number half pyramid pattern with the size R.


Explanation:
From the given input R=5, Print from 1 to 75 and reduced by 1 number, print from 1 to 4 and 1 to 3, 1 to 2 print till 1.


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

  let num = 1
  for(let row = n; row>=1; row--){
    let str = ''
   
   for(let j=1; j<=row; j++){
    str+=j
   }
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
