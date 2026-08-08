/*
45. Sorted Elements Less Than K

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers N,K followed by N elements print all the elements lesser than K in sorted order.If the elements could not be found print -1


Input Description:
Input Size : N <= 100000


Sample Input:
5 3 1 2 1 4 1


Sample Output:
1 1 1 2
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
sameNum.length===0?console.log(-1):console.log(sameNum.sort().join(' '))
}

inp.on("close", () => {
  // console.log(userInput) 
  const [N, K] = userInput[0].split(' ').map(n=>Number(n))
  const arr = userInput[1].split(' ').map(n=>Number(n))

  result(arr,K)
 
  
});