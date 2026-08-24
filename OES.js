/*
898. Rhombus Star Pattern

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate an Rhombus Pattern using stars.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the solid rhombus using stars with the size of rhombus R.


Explanation:
From the given input R=4 print the rhombus 4 * 4 using stars.


Sample Input:
4


Sample Output:


   ****  
  ****  
 ****  
****  
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
     
     for(let space = 1;space<=n-row;space++){
      str+=' '
     }

     for(let j=1; j<=n; j++){     
     str+='*'
   }
  
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
