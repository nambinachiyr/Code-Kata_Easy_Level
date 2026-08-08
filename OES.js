/*
44. Common Elements in Sorted Arrays

Geekoin30
Easy
Topics
Problem Statement:
Given a number N and 2 arrays A and B of sorted order of size N, print the common elements.If it is not found print -1.


Input Description:
Input Size : 1 <= N <= 100000


Sample Input:
5
1 1 1 1 1
1 2 3 4 5


Sample Output:
1

*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr1,arr2){
  let sameNum = []
 for(let i of arr1){
  for(let j of arr2){
    if(i===j){
      if(!sameNum.includes(i)){
        sameNum.push(i)
      }
    }
  }
 }

// console.log(sameNum)
sameNum.length===0?console.log(-1):console.log(sameNum.join(' '))
}

inp.on("close", () => {
  // console.log(userInput) 
  const N = Number(userInput[0])
  const arr1 = userInput[1].split(' ').map(n=>Number(n))
  const arr2 = userInput[2].split(' ').map(n=>Number(n))
  // console.log(arr1,arr2)
  result(arr1,arr2)
 
  
});