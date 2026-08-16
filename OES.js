/*
116. Bitwise Left Shift

Geekoin40
Medium
Company
Problem Statement:
Given 2 numbers N,K print the number after performing bitwise left shift 'K' times.


Input Description:
The input consists of two integers, N and K, where 1 <= N, K <= 1000.


Output Description:
The output is the integer N after performing a bitwise left shift K times.


Sample Input:
5 2


Sample Output:
20

*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr){
  let leftShift ;
for(let i = 0;i<arr.length;i++){

    leftShift = arr[0]
  
  leftShift = leftShift<<arr[i]
}
console.log(leftShift)
}
rl.on("close", () => {
//  const n = Number(userInput[0])
 const arr = userInput[0].split(' ').map(n=>Number(n))
 result(arr)
});