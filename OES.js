/*
918. Number Square Pattern-2

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate a square pattern using numbers.


Input Description:
Given an integer R indicates number of R*2-1 rows.Where 1<=R<=100


Output Description:
Print the square pyramid number based on the given integer R.


Explanation:
Form the input R=5, print 1 to R in first column (vertical) and print 1 in first column ,next 4(22),9(33),16(4(4)),25(5(5)).


Sample Input:
5


Sample Output:


1  
1 4  
1 4 9  
1 4 9 16  
1 4 9 16 25  
1 4 9 16  
1 4 9  
1 4  
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
  for(let row = 1; row<=n; row++){
    let str =''
    for(let j = 1; j<=row; j++){
     str+=j*j+" "
    }
    console.log(str.trim())
  }

  for(let row = n-1; row>=1; row--){
    let str = ''
    for(let j = 1;j<=row; j++){
      str+=j*j+' '
    }
    console.log(str.trim())
  }
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
