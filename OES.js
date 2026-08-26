/*
947. Smallest Power of 2 Greater Than N

Geekoin30
Easy
Topics
Problem Statement:
Write a code to get a integer n as input and calculate the smallest perfect power of 2 greater than n.


Input Description:
A single line containing an integer,n.


Output Description:
Print the smallest perfect power of 2 greater than n.


Explanation:
The smallest perfect power of 2 greater than 48 is 64.


Sample Input:
48


Sample Output:
64

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

function result(num) {
  let n=1
 for(let i = 2;i<=num;i+2){
  n*=i

  if(n>num)
  {
    console.log(n)
    break
  }
 }
}

rl.on('close', () => {
  const num = Number(userInput[0]);
 
  result(num);
});
