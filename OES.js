/*
89. Counting Perfect Squares in a Range

Geekoin50
Medium
Topics
Problem Statement:
Given a range (i.e) two numbers L and R count the number of perfect squares within the range (inclusive of L and R).If no perfect square exists within the range print '-1'.


Input Description:
The input consists of two integers L and R, representing the range, where L <= R <= 100000.


Output Description:
The output is an integer representing the count of perfect squares within the range [L, R], or -1 if none exist.


Sample Input:
2 10


Sample Output:
2

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,k){
 
  let numbeOfSquare = 0
  for(let i = n;i<=k;i++){
    if(Number.isInteger(Math.sqrt(i))){
      numbeOfSquare ++
    }
  }
 console.log(numbeOfSquare===0?-1:numbeOfSquare)
}
rl.on("close", () => {
 
  const [n,k] = userInput[0].split(' ').map(n=>Number(n))
  
  
  result(n,k)
});