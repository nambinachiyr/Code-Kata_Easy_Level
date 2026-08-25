/*
939. Reverse Integer Sequence

Geekoin30
Easy
Topics
Solved!
Problem Statement:
Write a code to get an integer N and print the values from N to 1.


Input Description:
A single line contains an integer N.


Output Description:
Print the values from N to 1 in a separate line.


Explanation:
The values from N upto 1 is printed.


Sample Input:
10


Sample Output:
10
9
8
7
6
5
4
3
2
1


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
 for(let row = n; row>=1; row--){
 
    console.log(row)
  
 }
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
