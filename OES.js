/*
911. Alphabet Pyramid Pattern-4

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
   CCC  
  EEEEE  
 GGGGGGG  
IIIIIIIII  
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
   for(let space=1;space<=n-row;space++){
    str+=' '
   }
   let lr = String.fromCharCode(row*2+63)
   for(let letter=1;letter<=2*row-1;letter++){
      str+=lr
   }

   console.log(str)
  }
   
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
