/*
253. Nearest Neighbors in Array

Geekoin60
Medium
Topics
Problem Statement:
Given two numbers N,K and an array of size N, print the three nearest neighbours of K(nearest neighbours are numbers which have least difference with K).


Input Description:
Input Size : 4 <= N, K <= 100000


Sample Input:
5 3
1 2 3 4 6


Sample Output:
2 4 1
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

function result(num,k,arr) {
  const filter = arr.filter(n=>n!==k)
  let diff_k = []
  for(let i=0; i<filter.length; i++){
    let diff = Math.abs(k-filter[i]) // This function Using for Cacle the Negative Number
    diff_k.push({
      value:filter[i],
      dif:diff
    })
  }
  diff_k.sort((a,b)=>a.dif-b.dif)

  let nearestNumber = []
  for(let i=0; i<3; i++){
    nearestNumber.push(diff_k[i].value)
  }
  console.log(nearestNumber.join(' '))
 
}

rl.on('close', () => {
  const [num,k] = userInput[0].split(' ').map(n=>Number(n));
  const arr = userInput[1].split(' ').map(n=>Number(n))
  result(num,k,arr);
});
