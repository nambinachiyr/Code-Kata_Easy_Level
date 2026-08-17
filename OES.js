/*
133. Sum of Consecutive Pairs

Geekoin40
Medium
Topics
Problem Statement:
Given a number N and an array of N elements, find the sum of the sums obtained by considering all consecutive pairs of adjacent elements.


Input Description:
The input consists of a number N and an array of N elements. N <= 100000.


Output Description:
The output is the sum of the sums obtained by considering all consecutive pairs of adjacent elements.


Sample Input:
5
1 2 3 4 5


Sample Output:
24((1+2)+(2+3)+(3+4)+(4+5))

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(arr) {
  // arr = arr.sort((a,b)=>a-b)
  // console.log(arr)

  let max=0
  function maxOfPairs(n1,n2){
   max=max+n1+n2
  }

  for(let i =0 ;i<arr.length-1;i++){
   maxOfPairs(arr[i],arr[i+1])
  }
  console.log(max)
}

rl.on('close', () => {
  const n = userInput[0];
  const arr = userInput[1].split(' ').map((n) => Number(n));
  result(arr);
});
