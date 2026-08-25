/*
940. Sum of Numbers up to N

Geekoin30
Easy
Topics
Problem Statement:
Write a code to get an integer N and print the sum of values from 1 to N.


Input Description:
A single line contains an integer N.


Output Description:
Print the sum of values from 1 to N.


Explanation:
The sum of values from 1-10 is 55.


Sample Input:
10


Sample Output:
55
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

function result(n) {
  const arr = Array.from({length:n})
  for(let i = 1;i<=n;i++){
    arr[i-1]=i
  }
  const sum = arr.reduce((acc,cur)=>acc+cur,0)

  console.log(sum)
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
