/*
94. Count Occurrences of K in N

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers N and K.Print the number of occurrences of K in N.If K is not found print '-1'.


Input Description:
1 <= N <= 100000, 0 <= K <= 9


Sample Input:
1000 0


Sample Output:
3

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,k){
let nums = n.split('')
 let isHas = nums.filter(num=>
  num===k[0]
 )
 console.log(isHas.length===0?-1:isHas.length)


}

rl.on("close", () => {
  // console.log(userInput)
 let [n,k] = userInput[0].split(' ')
 
  result(n,k)
});