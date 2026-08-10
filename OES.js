/*
49. Longest Repeating Sequence

Geekoin40
Medium
Topics
Problem Statement:
Given a number N and an array of N elements, find the length of the longest repeating sequence of the elements.If no such sequence is found print -1


Input Description:
The input consists of an integer N (where N <= 100000) and an array of N elements.


Sample Input:
8
1 2 2 2 3 4 5 6


Sample Output:
3

*/


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(N,arr){
  let maxCount = 1
  let current =1 ;

  for(let i = 1 ;i<N;i++){
   if(arr[i]===arr[i-1]){
    // console.log("cur " ,'=',arr[i])
     current ++
   }else{
    count = 1 ;
   }if(current>maxCount){
    maxCount = current
   }
 }
 maxCount===1?console.log(-1):console.log(maxCount)
}

rl.on("close", () => {
  // console.log(userInput) 
  const N = userInput[0].split(' ').map(n=>Number(n))
  const arr = userInput[1].split(' ').map(n=>Number(n))
  

  result(N,arr)
 
  
});