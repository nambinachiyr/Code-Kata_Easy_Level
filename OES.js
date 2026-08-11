/*
53. Rotated Array Rotation Count

Geekoin50
Medium
Topics
Problem Statement:
Given an value 'M' follwed by array of M elements in which the elements would have been rotated for certain 'N' times from the intial array representation where all elements are arranged in ascending order.Print the 'N' or print -1 if there is no rotation made or cannot be determined.Note: 1<=N<=length of the given array.


Sample Input:
5
15 18 2 3 6 12


Sample Output:
2




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
  let count = 0
  for(let i = 0;i<N-1;i++){
    count= count+1
    if(arr[i]>arr[i+1]){
     break
    }else{
      if(arr[i] === arr[i+1]){
        count = 0
      }
    }
  }
  // console.log(count)
console.log(count===0?-1:count)
}

rl.on("close", () => {
  const N = userInput[0].split('').map(n=>Number(n))
  let arr = userInput[1].split(' ').map(n=>Number(n))
 

  result(N[0],arr)
 
  
});