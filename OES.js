/*
864. Rectangle of Stars

Geekoin30
Easy
Topics
Problem Statement:
Generate a solid rectangle using stars.


Input Description:
Given an integer R indicates no of rows and an integer C indicates no of columns.Where 1<=R<=100


Output Description:
Print the rectangle using stars with R rows and C columns.


Sample Input:
3 5


Sample Output:


* * * * *  
* * * * *  
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
      if(j===k-1){
        // partten = partten+'*'  Row,s last one is not have space
      }else{
        partten = partten+ '* ' //Row's inner
      }
    }
    console.log(partten)
  }
 }



rl.on("close", () => {
 const [n,k] = userInput[0].split(' ').map(n=>Number(n))

 result(n,k)
});