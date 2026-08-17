/*
147. Hexadecimal to Decimal Conversion

Geekoin40
Medium
Topics
Problem Statement:
Given a hexadecimal number convert it into decimal.


Sample Input:
293


Sample Output:
659
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
const decimal = parseInt(n,16)    
console.log(decimal)
  }

rl.on('close', () => {
const n = userInput[0]
result(n)
});
