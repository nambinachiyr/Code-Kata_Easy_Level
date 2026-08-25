/*
920. Half Pyramid of Multiples

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate a half pyramid pattern of mulitples of the given number.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number half pyramid pattern of multiples based on the given integer R.


Explanation:
From the given input R=10, print 1 multiple in first line, print 2 multiples in second line with size 2, print 3 multiple with size 3,print 4 multiples with size 4,print until R rows with size R.


Sample Input:
10


Sample Output:


1  
2 4  
3 6 9  
4 8 12 16  
5 10 15 20 25  
6 12 18 24 30 36  
7 14 21 28 35 42 49  
8 16 24 32 40 48 56 64  
9 18 27 36 45 54 63 72 81  
10 20 30 40 50 60 70 80 90 100  

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
 
  let str = Array.from({length:n},()=>[])
  for(let col = 1; col<=n; col++){
    let num = 0
    // if(col % 2 ===0 ){
      for(let row=col;row<=n;row++){
        str[row-1][col-1] = num+col*col
      // }
      num=num+col
    }
  }
  // console.log(str.join(' '))

  for(let row = 0;row<str.length;row++){
    console.log(str[row].join(' '))
  }
 
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
