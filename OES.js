/*
895. Number Half Pyramid Pattern-7

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate a half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number half pyramid pattern with the size R.


Explanation:
From the given input R=5, Print from 13579 in first line and reduced by 1 number, print from 3579 in second line and 579, and 79 and finally print 9.


Sample Input:
5


Sample Output:


13579  
3579  
579  
79  
9  
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

 function result(n){

  for(let row =1; row<=n; row++){
    let str = ''
   
   for(let j=row*2-1; j<=n*2; j++){
  
     if(j%2!==0){
      str+=j
    }
   
   }
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
