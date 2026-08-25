/*
923. Half Pyramid Number Pattern-3

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate a half pyramid number pattern.


Input Description:
Given an integer R indicates number of rows.Where 1<R<10


Output Description:
Print the number half pyramid pattern based on the given integer R.


Explanation:
From the given input R=5, print odd numbers in odd line,print even numbers in even lines, so first print 1,second line print 2 4,and till Rth row 1 3 5 7 9


Sample Input:
5


Sample Output:


1  
2 4  
1 3 5  
2 4 6 8  
1 3 5 7 9  
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
  for(let num = 1; num<=row*2;num++){
   if(num%2!==0 && row % 2 !==0){
    str+=num+' '  
  }else if(num % 2===0 && row % 2===0){
    str+=num+' ' 
  }
}
console.log(str.trim())
 }
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
