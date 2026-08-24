/*
910. Alphabet Pyramid Pattern-3

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate a alphabet pyramid pattern.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the alphabet pyramid pattern according to the given integer R.


Explanation:
From the given input R=5,print 5 rows of the pyramid alphabet.


Sample Input:
5


Sample Output:


    A  
   ABC  
  ABCDE  
 ABCDEFG  
ABCDEFGHI  

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
    for (let leftSide = 0; leftSide<=row*2; leftSide++) {
      str += String.fromCharCode(leftSide+65);
    }
   

    console.log(str);
  }
   
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
