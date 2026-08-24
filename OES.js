/*
919. Matrix Number Pattern

Geekoin40
Medium
Topics
Problem Statement:
Write a code to generate a matrix number pattern.


Input Description:
Given an odd integer R indicates number of rows.R is always odd integer. Where 1<=R<=100


Output Description:
Print the matrix number pattern R*R based on the given integer R.


Explanation:
From the given input R=5, print the square matrix R*R.


Sample Input:
5


Sample Output:

33333  
32223  
32123  
32223  
33333  

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
 
  let num = Math.round(n/2)
  for(let row = 1; row<=n; row++){
    let str = ''
    for(let j = 1; j<=n; j++){
      let min = Math.min(row,j,n-row+1,n-j+1) //(1,1,5-1+1,5-1+1) => min=(1)
      let layer = num-min+1 //3-1+1=>3
      str+=layer
    }
    console.log(str)
  }
 
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
