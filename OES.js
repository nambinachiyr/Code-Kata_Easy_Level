/*
888. Number Pyramid Pattern-2

Geekoin40
Medium
Topics
Problem Statement:
Generate a number pyramid pattern.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number half pyramid pattern with the size R.


Sample Input:
4


Sample Output:


1234567  
12345  
123  
1  

Explanation:
From the given input R=4, Print from 1 to 7 and reduced 2 numbers, print from 1 to 5 and 1 to 3, print till 1.
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
   
   for(let j=1; j<=row*2-1; j++){
    str+=j
   }
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
