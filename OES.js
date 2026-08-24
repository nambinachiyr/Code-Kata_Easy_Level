/*
904. Star Pyramid Pattern-3

Geekoin30
Easy
Topics
Problem Statement:
Write a code to generate a pyramid using stars.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the pyramid pattern using stars based on the given integer R.


Explanation:
From the given input R=6, to print the half pyramid using star with the given rows 6


Sample Input:
6


Sample Output:


     *  
    **  
   ***  
  ****  
 *****  
******  
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

  for (let row = 1; row <= n; row++) {
    let str = '';

    for (let space = row; space < n; space++) {
      str += ' ';
      
    }
    for (let leftSide = 1; leftSide <= row; leftSide++) {
     str+='*'
    }

    console.log(str);
  }
  
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
