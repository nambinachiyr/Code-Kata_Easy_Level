/*
61. Max Element using Bitwise AND

Geekoin40
Medium
Company
Problem Statement:
Given a number N and an array of N elements, find the maximum of the elements (using Bitwise AND) and print the output.


Input Description:
Input Size N <= 100000


Sample Input:
4
2 4 4 2


Sample Output:
4
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(N,arr){
  let test  = []
  for(let i = 0 ;i<N;i++){
      let result = arr[i] & arr[i]
      test.push(result)
  } 
  console.log(test.sort()[test.length-1])
 
}

rl.on("close", () => {
  const N= Number(userInput[0])
  let arr = userInput[1].split(' ').map(n=>Number(n))

  result(N,arr)
 
  
});