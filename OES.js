/*
922. Generate a Square Pattern of 1s

Geekoin20
Easy
Topics
Problem Statement:
Write a code to generate a square pattern using the number '1'.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the square pattern with the number '1' in R*R form based on the given integer R.


Explanation:
From the given input R=5, print R*R matrix with the value '1' only.


Sample Input:
5


Sample Output:


11111  
11111  
11111  
11111  
11111  


*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

function result(n) {
 for(let row = 1; row<=n; row++){
  let str = ''
  for(let num = 1; num<=n;num++){
    str+=1
  }
  console.log(str)
 }
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
