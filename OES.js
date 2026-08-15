/*
99. Prime Pairs for a Number

Geekoin50
Medium
Topics
Problem Statement:
Given a number N, print the distinct pairs formed by multiplying two prime numbers (i.e)prime x prime should yield the N.Also print the numbers in descending order.If no such pairs can be formed print '-1'.


Input Description:
The input consists of a single integer N, where 1 <= N <= 100000.


Output Description:
Print the distinct pairs of prime numbers (prime x prime = N) in descending order. If no such pairs can be formed, print '-1'.


Sample Input:
65


Sample Output:
13 5
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
  
  for(let i = 2 ;i <n;i++){
      if(Number.isInteger(n/i)){
        let num = n/i
        let flexArr = [num,i]
        let itHas = factors.some(pairs=>
          pairs[0] === flexArr[1] &&
          pairs[1] === flexArr[0]
        )
      if(!itHas){
        factors.push(flexArr)
      }
      
      }
    }

    // Find the PrimeFactors
    
    let primeFactors = []
    
    for(let pair of factors){
      let count = 0
      for(let num of pair){
        let isPrime = false
        for(let j = 2 ;j<num;j++){
          if(num % j !== 0){
            // console.log(num)
            isPrime = true
            count++
            break;
          }else{
            isPrime = false;
            count = 0
          }
        }if(isPrime && count===2){
           primeFactors.push(pair)
        }
        
      }
    }
    // console.log(primeFactors)
    
    console.log(primeFactors.length===0?-1:primeFactors.map(n=>n.join(' ')).join(' '))
}

rl.on("close", () => {
  // console.log(userInput)
 let n = Number(userInput[0])
 
  result(n)
});