/*
115. Bitwise XOR of Array Elements

Geekoin50
Medium
Topics
Company
Problem Statement:
Given a number N and an array of N elements, find the Bitwise XOR of the array elements.


Input Description:
The input consists of an integer N, representing the size of the array, followed by N array elements. The input size N is at most 100000.


Output Description:
The output is the Bitwise XOR of all elements in the array.


Sample Input:
2
2 4


Sample Output:
6
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,arr){

  let xor = 0   //XOR = if 0 0->0, 1 1->0, 0 1->1, 1 0->1 2same->0 different->1
  for(let i = 0;i<n;i++){
    xor = xor ^ arr[i]
  }
  console.log(xor)

//  console.log(arr[0]^arr[1])
}
rl.on("close", () => {
 const n = Number(userInput[0])
 const arr = userInput[1].split(' ').map(n=>Number(n))
 result(n,arr)
});