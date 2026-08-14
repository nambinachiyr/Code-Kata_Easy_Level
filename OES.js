/*
83. Max after each insertion

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and K followed by N elements and K elements. Now insert the given K elements one by one into the array and print the maximum in the array after each insertion .


Input Description:
Input Size : K <= N <= 10000(read about priority queues and implement)


Sample Input:
5 2
1 2 3 4 5
5 4


Sample Output:
5 5
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,k,arr1,insertingElements){
  let maxElement = [];
  for(let i = 0 ; i<k ;i++){
    let max = 0
    // console.log(i,"i")
    arr1[n+i] = insertingElements[i];
    max = arr1.sort((a,b)=>a-b)[arr1.length-1]
    maxElement.push(max)
    // console.log(arr1.length)
  }   
  console.log(maxElement.join(' '))
 }

rl.on("close", () => {
  const [n,k] = userInput[0].split(' ').map(n=>Number(n))
  let arr1 = userInput[1].split(' ').map(n=>Number(n))
  let insertingElements = userInput[2].split(' ').map(n=>Number(n))
  result(n,k,arr1,insertingElements)
});