/*
43. Minimum Odd Quotient Factor

Geekoin40
Medium
Topics
Problem Statement:
Given number N, find the minimum factor which yeilds odd number as the quotient.


Input Description:
The input consists of a single integer N, where N <= 100000.


Output Description:
The output is the minimum factor of N that yields an odd number as the quotient.


Sample Input:
9


Sample Output:
1





*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

function result(N){
  const factors = []
  for(let i = 1 ;i<=N;i++){
    if(N % i === 0){
       factors.push(i)
    }
  }
  // console.log(factors)
  const result = factors.filter(f=>{
    let que = N/f
    if(que %2 !==0){
      return f
    }
  })
  // console.log(result)
  result.length===0?console.log(-1):console.log(result[0])
}

inp.on("close", () => {
  // console.log(userInput) 
  let N = Number(userInput[0])
  result(N)
 
  
});