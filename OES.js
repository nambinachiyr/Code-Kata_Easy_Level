/*
924. X Number Pattern

Geekoin60
Medium
Topics
Problem Statement:
Write a code to generate the X form of a number pattern.


Input Description:
Given an integer N indicates X pattern.Where 1<=N<=100


Output Description:
Print the numbers in X form based on the given integer N.Where 1<=N<=100


Sample Input:
5


Sample Output:


1       1  
 2     2  
  3   3  
   4 4  
    5  
   4 4  
  3   3  
 2     2  
1       1  
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

  // Left Side -TOP
  for(let space = 1;space<row;space++){
    str+=' '
  }
  for(let num = 1; num<=1;num++){
   str+=row
  }

  // Right Side -TOP
  for(let space = row; space<(n*2-row)-1; space++){
    str+=' '
  }
  for(let num = 1;num<=1;num++){
    if(row !== n){
      str+=row
    }
  }
console.log(str)
 }

//  Left Side - BOTTOM
for(let row = n-1;row>=1;row--){
  let str= ''
  for(let space = 1;space<row;space++){
    str+=' '
  }
  for(let num = 1;num<=1;num++){
    str+=row
  }

  // Right Side - BOTTOM
  for(let space = 1;space<(n-row)*2;space++){
    str+=' '
  }
  for(let num = 1;num<=1;num++){
    str+=row
  }

  console.log(str)
}
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
