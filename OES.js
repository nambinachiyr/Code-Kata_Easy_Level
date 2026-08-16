/*
124. Kth Digit from Position

Geekoin50
Medium
Topics
Problem Statement:
Given a number N, print the kth digit from the given position p(given order N P K).


Sample Input:
5765 2 1


Sample Output:
6
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(N,P,K){

  // P->position of Kth element mean p is 1 <- This is position not Index so we did P-1
// for to get the Index so it is 5 then the Kth element so k = 3 remove till position 1
// and count 3 element the 3 element is nswer 5 is position so remove it 5-1,6-2,7-3
let answer = 0 
for(let i = 1;i<N.length;i++){
  answer = N[(P-1)+K]
 }
 console.log(answer)
}
rl.on("close", () => {
//  const n = Number(userInput[0])
 const [nums,p,k] = userInput[0].split(' ')
 const N = nums.split('').map(n=>Number(n))
const P = Number(p)
const K = Number(k)

 
 result(N,P,K)
});