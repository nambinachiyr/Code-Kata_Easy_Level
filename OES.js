/*
903. Right Arrow Pattern

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate a right arrow using patterns.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the right arrow pattern using stars based on the given integer R.


Sample Input:
5


Sample Output:


    *  
   *  
  *  
 *  
*****  
 *  
  *  
   *  
    *  

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

    //  Top
    for (let space = row; space < n; space++) {
      if (row !== n) {
        str += ' ';
      }
    }
    for (let leftSide = 1; leftSide <= n; leftSide++) {
      if (row !== n) {
        str += '*';
        break;
      } else {
        str += '*';
      }
    }

    console.log(str);

    //  Bottom
  }
  for (let row = 1; row <= n; row++) {
    let str = '';
    for (let space =1; space <=row; space++) {
      if(row!==n){
        str += ' ';
      }
    }
    for (let rightSide =row; rightSide < n; rightSide++) {
      
        str += '*';
        break
    
    }
    console.log(str);
  }
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
