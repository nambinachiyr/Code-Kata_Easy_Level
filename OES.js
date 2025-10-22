/*
57. Max Length Increasing Subarray

Problem Statement:
Given an array of N elements,find the maximum length of increasing continuous sub-array.If it is not found print '-1'.


Input Description:
Input Size : N <= 100000


Output Description:
The maximum length of the increasing continuous sub-array, or '-1' if not found.


Sample Input:
5
1 2 3 2 1


Sample Output:
3
*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

const difference = (arr1)=>{
  let maxLen = 1
  let curLen = 1
  for(let i = 1;i<arr1.length;i++){
    if(arr1[i]>arr1[i-1]){
      curLen++
    }else{
       if(maxLen<curLen){
        maxLen = curLen
      }curLen = 1
    }
  }
  if(maxLen<curLen){
    maxLen = curLen
  }
  if(maxLen<=1) maxLen = -1;
  console.log(maxLen)

}

inp.on("close", () => {
  const arr1 = userInput[1].split(' ').map(num=>Number(num))
  
  difference(arr1)
});