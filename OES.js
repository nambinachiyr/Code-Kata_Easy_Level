/*
865. Hollow Rectangle Star Pattern

Geekoin30
Easy
Topics
Problem Statement:
Write a code to generate a hollow rectangle using stars.


Input Description:
Given an integer R indicates no of rows and an integer C indicates no of columns.Where 1<=R<=100


Output Description:
Print the hollow rectangle using stars with R rows and C columns.


Explanation:
From the given input R=3 and C=5 print the hollow rectangle of star width 5 and height 3.


Sample Input:
3 5


Sample Output:


* * * * *  
*       *  
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
    for(j=0;j<k;j++){
      if((j===k-1)){
        partten = partten+'*'  //Row,s last one is not have space
      }else if(i===0 || i===n-1){
        partten = partten+ '* ' //Row's inner
      }
      else if(j===0){
        partten = partten+'* '
      }else{
        partten = partten+'  '
      }
    }
    console.log(partten)
  }
 }



rl.on("close", () => {
 const [n,k] = userInput[0].split(' ').map(n=>Number(n))

 result(n,k)
});