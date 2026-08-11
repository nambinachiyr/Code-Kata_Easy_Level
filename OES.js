/*
62. Reverse a String-2

Geekoin40
Medium
Topics
Problem Statement:
Given a string S, print the reverse of the string.


Input Description:
Input Size : |s| <= 100000 (ie do it in O(n) or O(log n) time complexity)


Sample Input:
codekata


Sample Output:
atakedoc
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr){

  for (let i = 0 ; i<arr.length/2;i++){
    let previous = arr[i]
    arr[i] = arr[arr.length-(i+1)]
    arr[arr.length-(i+1)] = previous
  }
  console.log(arr.join(''))

  // --------------------------------------------------------------------------
        // This is One line Answer
  //  console.log(arr.reverse().join(''))
}

rl.on("close", () => {
  let arr = userInput[0].split('')
  result(arr) 
  
});