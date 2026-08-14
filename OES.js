/*
92. Sorted Array Search

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers N,K followed by a sorted array of N elements, search and tell if an element K is present in the array.print 'yes' if element is present otherwise print 'no'.


Input Description:
Input Size : 1 <= N <= 1000000000000000(Do it in logN time complexity)


Output Description:
print 'yes' if element is present otherwise print 'no'.


Sample Input:
3 2
2 3 7

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,k,arr){
  
  console.log(arr.includes(k)?"yes":"no")
 
}

rl.on("close", () => {
 const [n,k] = userInput[0].split(' ').map(n=>Number(n))
 const arr = userInput[1].split(' ').map(n=>Number(n))
  result(n,k,arr)
});