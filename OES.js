/*
55. Counting Distinct Pairs

Geekoin50
Medium
Topics
Solved!
Problem Statement:
Given an array A of N elements, count the number of distinct pairs (i,j) such that i < j and A[i] < A[j].If no such pairs can be made print -1


Input Description:
The input consists of an integer N, representing the number of elements, followed by N space-separated integers representing the elements of array A.


Output Description:
The output is a single integer representing the count of distinct pairs (i,j) such that i < j and A[i] < A[j]. If no such pairs can be made, print -1.


Sample Input:
5
1 2 3 4 5


Sample Output:
10

*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(N,arr){
  let test = []
  let seen = new Set()  
  for(let i = 0 ;i<N-1;i++){
    for(let j = i+1;j<N;j++){
      if(i<j && arr[i]<arr[j] ){
        let pair = `${arr[i]},${arr[j]}`
        if(!seen.has(pair)){
          seen.add(pair)
          test.push([arr[i],arr[j]])
        }
      }
    }
  } 
  console.log(seen.size===0?-1:seen.size)
 
}

rl.on("close", () => {
  const N= Number(userInput[0])
  let arr = userInput[1].split(' ').map(n=>Number(n))

  result(N,arr)
 
  
});