/*
938. Print Even Numbers up to N

Geekoin20
Easy
Topics
Problem Statement:
Write a code to get an integer N and print the even values from 1 till N in a separate line.


Input Description:
A single line contains an integer N.


Output Description:
Print the even values from 1 to N in a separate line.


Explanation:
The even values from 1 upto N is printed.


Sample Input:
6


Sample Output:
2
4
6



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
 for(let row = 1; row<=n; row++){
  if(row%2===0){
    console.log(row)
  }
 }
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
