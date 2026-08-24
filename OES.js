/*
896. Number Half Pyramid Pattern-8

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
From the given input R=5, print even and odd numbers alternative rows.


Sample Input:
5


Sample Output:


1  
24  
135  
2468  
13579  

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
   
   for(let j=1; j<=row*2; j++){
  if(row % 2 !==0){
    if(j%2!==0){
      str+=j
    }
  }else{
    if(j%2===0){
      str+=j
    }
  }
   
   }
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
