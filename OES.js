/*
54. Find Position of Number in Array

Geekoin40
Medium
Topics
Attempted!
Problem Statement:
Given a number N,K followed by array of N elements where the difference between any adjacent elements is 1. Find the position of the given number K.If K not found in the array print -1


Input Description:
The input consists of two integers N and K, followed by an array of N elements where the difference between any adjacent elements is 1.


Output Description:
The output is the position of the given number K. If K is not found in the array, print -1.


Sample Input:
5 1
3 2 1 2 3


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

function result(N,K,arr){
  const index = arr.findIndex(a=>a==K)
  console.log(index+1===0?-1:index+1)

}

rl.on("close", () => {
  const [N,K] = userInput[0].split(' ').map(n=>Number(n))
  let arr = userInput[1].split(' ').map(n=>Number(n))
 

  result(N,K,arr)
 
  
});