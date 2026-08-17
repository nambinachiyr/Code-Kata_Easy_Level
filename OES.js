/*
148. Lexicographically Smallest String

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N strings, find the lexicographically smallest string.


Input Description:
The input consists of an integer N, representing the number of strings, followed by N strings. N is less than or equal to 1000.


Output Description:
The output is the lexicographically smallest string among the given N strings.


Sample Input:
3
code
learn
practice


Sample Output:
code
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(n,arr) {
    let sortAccend = arr.sort()
    console.log(sortAccend[0])

    // console.log("abc">"ag"?"d":'df')
  }

rl.on('close', () => {
const n = Number(userInput[0])
const arr = userInput.slice(1,)
console.log(arr)
result(n,arr)
});
