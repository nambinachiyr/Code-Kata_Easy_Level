/*
946. HCF of two integers

Geekoin40
Medium
Topics
Problem Statement:
Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.


Input Description:
A single line containing 2 integers separated by space.


Output Description:
Print the HCF of the integers.


Explanation:
The HCF of 2 and 3 is 1 as they are prime numbers.


Sample Input:
2 3


Sample Output:
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

function result(a) {

  let factors = []
  for(let i=0;i<a[1];i++){
    if(a[0]%i===0 && a[1]%i===0){
     factors.push(i)
    }
  }
  console.log(factors[factors.length-1])
}

rl.on('close', () => {
  const a = userInput[0].split(' ').map(n=>Number(n));
 
  result(a);
});
