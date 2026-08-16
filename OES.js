/*
867. Inverted Half Pyramid Pattern

Geekoin30
Easy
Topics
Problem Statement:
Write a code to generate an inverted half pyramid pattern using stars.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the star inverted pyramid with the given integer R.


Explanation:
From the given input R=5, print the inverted half pyramid star pattern with size 5.


Sample Input:
5


Sample Output:


*  *  *  *  *  
*  *  *  *  
*  *  *  
*  *  
*  

*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n){
  
  for(let i = n-1;i>=0;i--){
    let partten = ''
    for(j=0;j<=i;j++){
      if(j===i){
        partten = partten+'*'
      }else{
        partten = partten + '*  '
      }
    }
    console.log(partten)
  }
 }



rl.on("close", () => {
 const n = Number(userInput[0])

 result(n)
});