/*
117. Bitwise Right Shift

Geekoin50
Medium
Company
Problem Statement:
Given 2 numbers N and K print the number after performing bitwise right shift 'K' times(upto 2 decimal places).


Input Description:
The input consists of two numbers, N and K, where 1 <= N, K <= 1000.


Output Description:
The output is the number N after performing a bitwise right shift K times, rounded to 2 decimal places.


Sample Input:
5 2


Sample Output:
1

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
  
  leftShift = leftShift>>arr[i]
}
console.log(leftShift)
}
rl.on("close", () => {
//  const n = Number(userInput[0])
 const arr = userInput[0].split(' ').map(n=>Number(n))
 result(arr)
});