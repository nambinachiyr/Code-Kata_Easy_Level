/*
150. Prime Factorization

Geekoin50
Medium
Topics
Problem Statement:
Given a number N, print all the prime factors once in ascending order.


Input Description:
Input Size : N <= 100000


Sample Input:
100


Sample Output:
2 5
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});
 function result(n){

  let factors = []

   for(let i =2;i<=n;i++){
    if(n%i===0){
      factors.push(i)
    }
   }

   let primeFactors = []
   for(let i=0;i<factors.length;i++){
      let count = 0
      for(let j=2;j<=factors[i];j++){
        if(factors[i]%j===0){
           count++
      }
      }
      if(count===1){
        primeFactors.push(factors[i])
      }
      // console.log(count,factors[i])
    }
   console.log(primeFactors.join(' '))
 }
  

rl.on('close', () => {
const n = Number(userInput[0])

result(n)
});
