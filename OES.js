/*
909. Number Pyramid Pattern-4

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate a pyramid pattern on numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the pyramid number pattern based on the given integer R.


Explanation:
From the given input R=5, print the 5 rows of pyramid pattern using numbers.


Sample Input:
5


Sample Output:


    0  
   101  
  21012  
 3210123  
432101234  



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
  for (let row = 0; row<n; row++) {
    let str = '';

    for (let space = row; space <n-1; space++) {
      str += ' ';
    }
    for (let leftSide = row; leftSide >=0; leftSide--) {
      str += leftSide;
    }
    for (let rightSide = 1; rightSide<=row; rightSide++) {
      str += rightSide;
    }

    console.log(str);
  }
   
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
