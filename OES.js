/*
69. Prime Count in a Range

Geekoin30
Easy
Topics
Problem Statement:
Given a range of 2 numbers (i.e) L and R count the number of prime numbers in the range (inclusive of L and R ).


Input Description:
Input Size : L <= R <= 100000 (complexity O(n) read about Sieve of Eratosthenes)


Sample Input:
2 5


Sample Output:
3

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(a,num1,num2){
  let primeNumbersCount = 0
  for(let i = num1;i<=num2;i++){
    let count = 0
      for(let j = 1;j<=i;j++){
        if(i%j===0){
          count++
        }
      }
      if(count>2){
        // console.log("This not Prime Number - ",i)
      }else{
        // console.log("This is prime Number - ",i)
        primeNumbersCount++
      }
    }
    console.log(primeNumbersCount)
 }

rl.on("close", () => {
  let a = userInput[0].split(' ') .map((n)=>Number(n)) 
  let num1 = a[0]
  let num2 = a[1]
 
  result(a,num1,num2)
});