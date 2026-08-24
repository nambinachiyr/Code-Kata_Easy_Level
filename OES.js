/*
906. Number Pyramid Pattern-3

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
From the given input R=5, print the 5 rows of pyramid, last line print 1,4th line print 3 on 3 times,and so on.


Sample Input:
5


Sample Output:


999999999  
 7777777  
  55555  
   333  
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

function result(n) {
  for (let row = n + n; row >= 1; row--) {
    let str = '';
    // console.log((2*n-1-row)/2)
    if (row % 2 !== 0) {
      for (let space = 0; space <(2*n-1-row)/2; space++) {
        str += ' ';
      }
      for (let leftSide = 1; leftSide <= row; leftSide++) {
        str += row;
      }

      console.log(str);
    }
  }
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
