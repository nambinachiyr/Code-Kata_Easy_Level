/*
48. Factorial of a Number-2

Geekoin40
Medium
Topics
Problem Statement:
Given a number N, find the factorial of N.


Input Description:
The input consists of a single integer N, constrained by 1 <= N <= 25.


Output Description:
The output is the calculated factorial of N.


Sample Input:
5


Sample Output:
120

*/


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(N){
//   const sameElement = []
//  for(let i =1;i<=N;i++){
//    sameElement.push(i)     
//  } //Using Loop to create the arr with N value

const sameElement = Array.from({length:N},(_,i)=>i+1) //Array Function to create the N value 

 const sum = sameElement.reduce((acc,cur)=>{return acc*cur},1)
 console.log(sum)
 
}

rl.on("close", () => {
  // console.log(userInput) 
  const N = Number(userInput[0])
  

  result(N)
 
  
});