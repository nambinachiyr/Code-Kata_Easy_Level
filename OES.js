/*
60. Minimum Difference in Array

Problem Statement:
Given an array, find the absolute minimum difference between any two elements in the array.


Input Description:
Input Size : N <= 1000000(complexity O(n) or O(nlogn))


Sample Input:
5
0 2 3 4 5


Sample Output:
1
*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

const difference = (arr)=>{
  // console.log(arr)
  // let firstMin = arr[arr.length-1]-arr[arr.length-2]
  // console.log(firstMin)
  let min = []
  // let dif = 0
  for(let i = 0;i<arr.length;i++){
    
     for(let j=i+1;j<arr.length;j++){
      
      let Min = arr[i]-arr[j]
      let firstMin = Min<0?Min*-1:Min
      let temMin = firstMin
      min.push(temMin)
      
     }
  }const result =  min.sort((a,b)=>a-b)[0]
  // console.log(min)
  console.log(result)
}

inp.on("close", () => {
  const arr = userInput[1].split(' ').map(num=>Number(num))
  difference(arr.sort((a,b)=>a-b))
});