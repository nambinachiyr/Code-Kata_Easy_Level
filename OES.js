/*
921. Number and Alphabet Pyramid

Geekoin60
Medium
Topics
Problem Statement:
Write a code to generate a pyramid of numbers and aplhabets.


Input Description:
Given an integer R indicates number of rows. Where 1<=R<=100


Output Description:
Print the number half pyramid pattern of multiples based on the given integer R.


Explanation:
From the given input R=8, print 8 rows in the form of pyramid with number & aplhabets.


Sample Input:
8


Sample Output:


       A1  
      AB12  
     ABC123  
    ABCD1234  
   ABCDE12345  
  ABCDEF123456  
 ABCDEFG1234567  
ABCDEFGH12345678  

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
  for(let space=row;space<n;space++){
    str+=' '
  }
  for(let l = 1;l<=row;l++){
    str+=String.fromCharCode(l+64)
  }
  for(let num = 1; num<=row;num++){
    str+=num
  }
  console.log(str)
 }
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
