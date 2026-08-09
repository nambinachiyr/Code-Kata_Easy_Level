/*
47. Numbers Repeated K Times

Geekoin50
Medium
Topics
Problem Statement:
Given 2 numbers N,K and an array of N elements, 
print the number(s) that has been repeated K times.
Print them in ascending order if there are more than one number to be printed.
If no element satisfies the pattern then print -1


Input Description:
The input consists of two integers N and K, followed by an array of N elements. N and K are up to 100000.


Output Description:
Print the numbers that have been repeated K times in ascending order. If no such element exists, print -1.


Sample Input:
5 2
1 2 4 1 2


Sample Output:
1 2


*/


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr,K){
  const sameElement = []
 for(let i =0;i<arr.length;i++){
  let count = 0
  for(let j =i; j<arr.length ;j++){
  
     if(arr[i]===arr[j]){
      
      count = count+1;
      if(count===K){
      
        sameElement.push(arr[i])
        break;
      }
     }
  }
 }
sameElement.length!==0?console.log(sameElement.sort().join(' ')):console.log(-1)
}

rl.on("close", () => {
  // console.log(userInput) 
  const [N, K] = userInput[0].split(' ').map(n=>Number(n))
  const arr = userInput[1].split(' ').map(n=>Number(n))

  result(arr,K)
 
  
});