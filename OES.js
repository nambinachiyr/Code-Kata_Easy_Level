/*
941. Print Integer Digits

Geekoin30
Easy
Topics
Problem Statement:
Write a code to get an integer N and print the digits of the integer.


Input Description:
A single line contains an integer N.


Output Description:
Print the digits of the integer in a single line separated by space,


Explanation:
The digits are splitted and displayed.


Sample Input:
348


Sample Output:
3 4 8

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
}

rl.on('close', () => {
  const n = userInput[0].split('').join(' ');
  console.log(n)

  // result(n);
});
