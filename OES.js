/*
50. Delete Last K Array Elements

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers N,K print the array after deleting the last K elements.


Input Description:
N,K <= 100000


Output Description:
The array after deleting the last K elements.


Sample Input:
5 4
1 2 3 4 5

Sample Output:
1

*/


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(N,arr,K){
  const length = Math.abs(arr.length-K)
  
 arr.length = length
 console.log(arr.join(' '))
}

rl.on("close", () => {
  // console.log(userInput) 
  const [N,K] = userInput[0].split(' ').map(n=>Number(n))
  const arr = userInput[1].split(' ').map(n=>Number(n))
  

  result(N,arr,K)
 
  
});