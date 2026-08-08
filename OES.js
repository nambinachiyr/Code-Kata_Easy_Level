/*
46. Descending Elements Below N

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N elements, print all elements lesser than N in descending order. If no element found print -1.


Input Description:
The input consists of a number N, and an array of N elements. N is between 1 and 10000 (inclusive).


Output Description:
Print all elements from the array that are lesser than N, in descending order. If no such elements are found, print -1.


Sample Input:
5
2 14 15 14 3


Sample Output:
3 2


*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr,K){
  let sameNum = arr.filter(n=>n<K)
  // console.log(sameNum)
 

// console.log(sameNum)
sameNum.length===0?console.log(-1):console.log(sameNum.sort().reverse().join(' '))
}

inp.on("close", () => {
  // console.log(userInput) 
  const K = Number(userInput[0])
  const arr = userInput[1].split(' ').map(n=>Number(n))

  result(arr,K)
 
  
});