/*
907. Alphabet Pyramid Pattern

Geekoin40
Medium
Topics
Problem Statement:
Write a code to generate a aplhabet pyramid pattern.


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
   ABA  
  ABCAB  
 ABCDABC  
ABCDEABCD  

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
  for (let row = 1; row<=n; row++) {
    let str = '';

    for (let space = row; space <n; space++) {
      str += ' ';
    }
    for (let leftSide = 1; leftSide <= row; leftSide++) {
      str += String.fromCharCode(64+leftSide);
    }
    for (let rightSide = 1; rightSide <row; rightSide++) {
      str += String.fromCharCode(64+rightSide);
    }

    console.log(str);
  }
   
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
