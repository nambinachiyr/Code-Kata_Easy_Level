/*
916. Alphabet Pyramid Pattern-6

Geekoin40
Medium
Topics
Problem Statement:
Write a code to generate a triangle character pattern.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the alphabet pyramid pattern according to the given integer R.


Explanation:
From the given input R=5,print 5 rows of the pyramid alphabet pattern.First line print A,then next line print A B, repeat this process until reach R characters on last line.


Sample Input:
5


Sample Output:

    A  
   A B  
  A B C  
 A B C D  
A B C D E  

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
    for(let space = row;space<n;space++){
      str+=' '
    }
   for(let letter=1;letter<=row;letter++){
      if(letter!==row){
        str+= String.fromCharCode(letter+64)+' '
      }else{
        str+= String.fromCharCode(letter+64)
      }
   }

   console.log(str)
  }
   
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
