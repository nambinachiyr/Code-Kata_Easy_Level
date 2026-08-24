/*
915. Alphabet Half Pyramid Pattern-3

Geekoin40
Medium
Topics
Problem Statement:
Write a code to generate a aplhabet half pyramid pattern.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the alphabet half pyramid pattern according to the given integer R.


Explanation:
From the given input R=5,print 5 rows of the pyramid alphabet pattern.


Sample Input:
5


Sample Output:


EDCBA  
EDCB  
EDC  
ED  
E  

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
   for(let letter=n;letter>=row;letter--){
      str+= String.fromCharCode(letter+64)
   }

   console.log(str)
  }
   
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
