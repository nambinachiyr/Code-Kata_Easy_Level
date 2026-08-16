/*
866. Star Pyramid Pattern

Geekoin30
Easy
Topics
Problem Statement:
Write a code to generate a pyramid pattern using stars from the given input size N.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the star pyramid with the given integer R.


Explanation:
From the given input R=5, print the half pyramid star pattern with size 5.


Sample Input:
5


Sample Output:


*  
* *  
* * *  
* * * *  
* * * * *  

*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,k){
  
  for(let i = 0;i<n;i++){
    let partten = ''
    for(j=0;j<=i;j++){
      if(j===i){
        partten = partten+'*'
      }else{
        partten = partten + '* '
      }
    }
    console.log(partten)
  }
 }



rl.on("close", () => {
 const [n,k] = userInput[0].split(' ').map(n=>Number(n))

 result(n,k)
});