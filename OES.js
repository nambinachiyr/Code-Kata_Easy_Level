/*
122. Swap Adjacent Elements

Geekoin40
Medium
Topics
Company
Problem Statement:
Given an array of N elements switch(swap) the element with the adjacent element and print the output.


Sample Input:
5
3 2 1 2 3


Sample Output:
2 3 2 1 3
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,nums){

  // this got 4/5
//   let j = 0
//  for(let i = 1;i<n;i++){
//   if(i!==n-1 && j!==n-1){
//     let temp = nums[j]
//     nums[j] = nums[j+1]
//     nums[j+1] = temp

//     // console.log(j,i)
//     j=j+2
//   }
  
//  }


// This git 5/5
for(let i =0 ;i<n-1;i+=2){
  let temp = nums[i]
     nums[i]=nums[i+1]
     nums[i+1] = temp
}
 console.log(nums)
}
rl.on("close", () => {
 const n = Number(userInput[0])
 const nums = userInput[1].split(' ').map(n=>Number(n))
 
 result(n,nums)
});