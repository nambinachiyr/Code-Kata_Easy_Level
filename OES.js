/*
105. String Rotation

Geekoin50
Medium
Topics
Problem Statement:
Given a string S and an integer K, print the string obtained by rotating the orignal string by K positions.


Input Description:
Input Size : 1 <= N, K <= 100000


Sample Input:
katacode 4


Sample Output:
codekata

*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(str,N){
  let a = str.split('')
  for(let i = 0 ; i<N;i++){
    let first = a.shift()
    a.push(first)
  }
  console.log(a.join(''))
 }



rl.on("close", () => {
 const [str,n] = userInput[0].split(' ')
 let N = Number(n)

 result(str,N)
});