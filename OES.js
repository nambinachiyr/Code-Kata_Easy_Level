/*
98. Even Factors of a Number

Geekoin60
Medium
Topics
Problem Statement:
Given a number N, print the even factors of N.If the even factor does not exists for N print '-1'.


Input Description:
Input Size : 1 <= N <= 1000


Sample Input:
8

Sample Output:
2 4 8
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n){
  let i = 2
  let factors = []
  while(i<=n){    
      let factor=n/i
      if(Number.isInteger(factor)){
      factors.push(i)
    }
    i++
  }

  let EvenFactors = factors.filter(n=>n%2===0)
  console.log(factors.length===0?-1:EvenFactors.length!==0?EvenFactors.join(' '):-1)
}

rl.on("close", () => {
  // console.log(userInput)
 let n = Number(userInput[0])
 
  result(n)
});