/*
82. Greatest Common Divisor-2

Geekoin40
Medium
Topics
Problem Statement:
Given a number N and a number K, find the greatest number which divides both.


Input Description:
N and K <= 100000


Sample Input:
5 10


Sample Output:
5
*/

const { match } = require('assert');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(num){

  // First Way 4/5
  // ---------------------------
  // let factors = []
  //  for(let i = 2;i<=num[0];i++){
  //   if(num[0] % i===0 && num[1] % i===0){
  //     if(!factors.includes(i)){
  //       factors.push(i)
  //     }
  //   }
  //  }
  //  console.log(factors.sort((a,b)=>b-a)[0])

  // -----------------------------------------------------------

  // 2nd Way

  let num1 = num[0]
  let num2 = num[1]

  while(num1%num2 !== 0){
    let temp = num2
    num2  = num1%num2
    num1 = temp
  }
  console.log(num2)
 }

rl.on("close", () => {
  const num = userInput[0].split(' ').map(n=>Number(n))
  result(num)
});