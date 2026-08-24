/*
890. Number Half Pyramid Pattern-2

Geekoin40
Medium
Topics
Problem Statement:
Write a code to generate a half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number half pyramid pattern with the size R.


Explanation:
From the given input R=5, Print from 1 to 5 and reduced by 1 number, print from 2 to 5 and 3 to 5, 4 to 5 print 5 at end.


Sample Input:
5


Sample Output:


12345  
2345  
345  
45  
5  

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
   
   for(let j=n+1-row; j<=n; j++){
    str+=j
   }
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
